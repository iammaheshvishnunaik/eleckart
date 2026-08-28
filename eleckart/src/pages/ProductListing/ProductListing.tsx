import type { HeroSlide } from "../../components/HeroBanner/HeroBanner";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

import heroBanner1 from "/images/banners/all_products/hero_banner_1.png";
import heroBanner2 from "/images/banners/all_products/hero_banner_2.png";
import mobileHeroBanner1 from "/images/banners/all_products/mob_hero_banner_1.png";
import mobileHeroBanner2 from "/images/banners/all_products/mob_hero_banner_2.png";

import { useLocation } from "react-router-dom";
import { useState } from "react";

import ListingHeader from "../../components/Product/ListingHeader/ListingHeader";
import FilterSidebar from "../../components/Product/FilterSidebar/FilterSidebar";
import ProductGrid from "../../components/Product/ProductGrid/ProductGrid";

import { Products } from "../../data/products";

function ProductListing() {
  /* Hero banner slides */
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      desktopImage: heroBanner1,
      mobileImage: mobileHeroBanner1,
      alt: "elecKart smartphones offer",
    },
    {
      id: 2,
      desktopImage: heroBanner2,
      mobileImage: mobileHeroBanner2,
      alt: "elecKart laptops offer",
    },
  ];

  /* Breadcrumb */
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const categoryLabel = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : null;

  const breadcrumbItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "All Products",
      path: "/products",
    },
    ...(category
      ? [
          {
            label: categoryLabel || "",
          },
        ]
      : []),
  ];

  /* Category filter */
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);

  /* Brand filter */
  const [selectedBrands, setSelectedBrands] =
    useState<string[]>([]);

  /* In-stock filter */
  const [inStockProducts, setInStockProducts] =
    useState(false);

  /* Available price range */
  const minProductPrice = Math.min(
    ...Products.map((product) => product.price)
  );

  const maxProductPrice = Math.max(
    ...Products.map((product) => product.price)
  );

  /* Selected price range */
  const [priceRange, setPriceRange] = useState({
    min: minProductPrice,
    max: maxProductPrice,
  });

  /* Category filter */
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  /* Brand filter */
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand);
      }

      return [...prev, brand];
    });
  };

  /* Price filter */
  const handlePriceChange = (
    minPrice: number,
    maxPrice: number
  ) => {
    setPriceRange({
      min: minPrice,
      max: maxPrice,
    });
  };

  /* Clear all filters */
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setInStockProducts(false);

    setPriceRange({
      min: minProductPrice,
      max: maxProductPrice,
    });
  };

  /* Filter products */
  const filteredProducts = Products.filter((product) => {
    /* URL category filter */
    if (
      category &&
      product.category.toLowerCase() !==
        category.toLowerCase()
    ) {
      return false;
    }

    /* Sidebar category filter */
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.some(
        (item) =>
          item.toLowerCase() ===
          product.category.toLowerCase()
      )
    ) {
      return false;
    }

    /* Brand filter */
    if (
      selectedBrands.length > 0 &&
      !selectedBrands.includes(product.brand)
    ) {
      return false;
    }

    /* In-stock filter */
    if (inStockProducts && !product.inStock) {
      return false;
    }

    /* Price filter */
    if (
      product.price < priceRange.min ||
      product.price > priceRange.max
    ) {
      return false;
    }

    return true;
  });

  /* Sorting */
  const [sortBy, setSortBy] = useState("relevance");

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      switch (sortBy) {
        case "price-low-high":
          return a.price - b.price;

        case "price-high-low":
          return b.price - a.price;

        case "rating":
          return b.rating - a.rating;

        case "newest":
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          );

        case "relevance":
        default:
          return 0;
      }
    }
  );

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner slides={heroSlides} />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Listing Header */}
      <ListingHeader
        title={
          category
            ? categoryLabel || ""
            : "All Products"
        }
        productCount={sortedProducts.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Left - Filters */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <FilterSidebar
            categories={[
              "Mobiles",
              "Laptops",
              "Smartwatches",
            ]}
            brands={[
              "Apple",
              "Samsung",
              "Oppo",
              "OnePlus",
              "Noise",
            ]}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            onClearFilters={handleClearFilters}
            selectedBrands={selectedBrands}
            onBrandChange={handleBrandChange}
            inStockProducts={inStockProducts}
            onChangeInStockStatus={setInStockProducts}
            minPrice={minProductPrice}
            maxPrice={maxProductPrice}
            selectedMinPrice={priceRange.min}
            selectedMaxPrice={priceRange.max}
            onPriceChange={handlePriceChange}
          />
        </aside>

        {/* Right - Products */}
        <main className="min-w-0 flex-1">
          <ProductGrid products={sortedProducts} />
        </main>
      </div>
    </div>
  );
}

export default ProductListing;