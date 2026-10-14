interface ListingHeaderProps {
  title: string;
  productCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const ListingHeader = ({
  title,
  productCount,
  sortBy,
  onSortChange,
}: ListingHeaderProps) => {
  return (
    <div className="mx-auto flex max-w-7xl items-end justify-between gap-3 border-b border-gray-200 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {productCount} products
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <label
          htmlFor="sort"
          className="whitespace-nowrap text-xs text-gray-600 sm:text-sm"
        >
          Sort by:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-[120px] rounded-lg border border-gray-300 bg-white px-2 py-2 text-xs text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:w-auto sm:px-3 sm:text-sm"
        >
          <option value="relevance">Relevance</option>
          <option value="price-low-high">
            Price: Low to High
          </option>
          <option value="price-high-low">
            Price: High to Low
          </option>
          <option value="rating">
            Customer Rating
          </option>
          <option value="newest">
            Newest
          </option>
        </select>
      </div>
    </div>
  );
};

export default ListingHeader;