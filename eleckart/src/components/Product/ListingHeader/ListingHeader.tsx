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
    <div className="flex mx-auto max-w-7xl px-4 items-end justify-between border-b border-gray-200 pb-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {productCount} products
        </p>
      </div>

      <div className="flex items-center gap-2">
        <label
          htmlFor="sort"
          className="text-sm text-gray-600"
        >
          Sort by:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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