import HeroBanner from "../../components/HeroBanner/HeroBanner"
import type { HeroSlide } from "../../components/HeroBanner/HeroBanner";
import ShopByCategory from "../../components/Product/ShopByCategory/ShopByCategory"
import FeaturedProducts from "../../components/Product/FeaturedProducts/FeaturedProducts"
import NewArrivals from "../../components/Product/NewArrivals/NewArrivals"
import BestSellers from "../../components/Product/BestSellers/BestSellers"
import BestDeals from "../../components/Product/BestDeals/BestDeals"
import PromotionalBanner from "../../components/common/PromotionalBanner"
import {Link} from "react-router-dom"

import heroBanner1 from "/images/banners/home/hero_banner_1.webp";
import heroBanner2 from "/images/banners/home/hero_banner_2.webp";
import heroBanner3 from "/images/banners/home/hero_banner_3.webp";

import mobileHeroBanner1 from "/images/banners/home/mob_hero_banner_1.webp";
import mobileHeroBanner2 from "/images/banners/home/mob_hero_banner_2.webp";
import mobileHeroBanner3 from "/images/banners/home/mob_hero_banner_3.webp";

export default function Home() {
    /*hero banner slides for home page*/
    const heroSlides: HeroSlide[] = [
    {
        id: 1,
        desktopImage: heroBanner1,
        mobileImage: mobileHeroBanner1,
        alt: "elecKart smartphones offer",
        categorySlug: "smartphones",
    },
    {
        id: 2,
        desktopImage: heroBanner2,
        mobileImage: mobileHeroBanner2,
        alt: "elecKart laptops offer",
        categorySlug: "laptops",
    },
    {
        id: 3,
        desktopImage: heroBanner3,
        mobileImage: mobileHeroBanner3,
        alt: "elecKart smartwatches offer",
        categorySlug: "smartwatches",
    },
    ];
    return (
        <>
            <main>
                <HeroBanner slides={heroSlides}/>
                <ShopByCategory />
                <FeaturedProducts />
                <NewArrivals />
                <BestSellers />
                <BestDeals />
                <Link to="products">
                    <PromotionalBanner
                        desktopImage="/images/banners/promotional_banners/promotional_banner_1_DT.png"
                        mobileImage="/images/banners/promotional_banners/promotional_banner_1_MB.png"
                        alt="Exclusive electronics offers"
                    />
                </Link>
            </main>
        </>
    )
}