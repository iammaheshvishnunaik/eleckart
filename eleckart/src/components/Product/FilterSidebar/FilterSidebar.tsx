import PriceFilter from "../PriceFilter/PriceFilter";

interface FilterSidebarProps {
  /* Category */
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;

  /* Brand */
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;

  /* In Stock */
  inStockProducts: boolean;
  onChangeInStockStatus: (checkedStatus: boolean) => void;

  /* Clear */
  onClearFilters: () => void;

  /* Price */
  minPrice: number;
  maxPrice: number;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  onPriceChange: (
    minPrice: number,
    maxPrice: number
  ) => void;
}

const FilterSidebar = ({
  categories,
  selectedCategories,
  onCategoryChange,

  brands,
  selectedBrands,
  onBrandChange,

  inStockProducts,
  onChangeInStockStatus,

  onClearFilters,

  minPrice,
  maxPrice,
  selectedMinPrice,
  selectedMaxPrice,
  onPriceChange,
}: FilterSidebarProps) => {
  return (
    <aside className="rounded-lg border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Filters
        </h2>

        <button
          type="button"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          onClick={onClearFilters}
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="border-b border-gray-200 pb-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Category
        </h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(
                  category
                )}
                onChange={() =>
                  onCategoryChange(category)
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="border-b border-gray-200 py-5">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Brand
        </h3>

        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />

              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock */}
      <div className="border-b border-gray-200 py-5">
        <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={inStockProducts}
            onChange={(e) =>
              onChangeInStockStatus(e.target.checked)
            }
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />

          <span>In Stock</span>
        </label>
      </div>

      {/* Price */}
      <PriceFilter
        min={minPrice}
        max={maxPrice}
        selectedMin={selectedMinPrice}
        selectedMax={selectedMaxPrice}
        onPriceChange={onPriceChange}
      />
    </aside>
  );
};

export default FilterSidebar;