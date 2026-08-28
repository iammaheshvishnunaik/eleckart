interface PriceFilterProps {
  min: number;
  max: number;
  selectedMin: number;
  selectedMax: number;
  onPriceChange: (
    minPrice: number,
    maxPrice: number
  ) => void;
}

const PriceFilter = ({
  min,
  max,
  selectedMin,
  selectedMax,
  onPriceChange,
}: PriceFilterProps) => {
  const handleMinChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    if (value <= selectedMax) {
      onPriceChange(value, selectedMax);
    }
  };

  const handleMaxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    if (value >= selectedMin) {
      onPriceChange(selectedMin, value);
    }
  };

  return (
    <div className="pt-5">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Price
      </h3>

      {/* Price Slider */}
      <div className="relative h-5">
        {/* Track */}
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-200" />

        {/* Active Track */}
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-indigo-600"
          style={{
            left: `${((selectedMin - min) / (max - min)) * 100}%`,
            right: `${
              100 -
              ((selectedMax - min) / (max - min)) * 100
            }%`,
          }}
        />

        {/* Minimum Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={selectedMin}
          onChange={handleMinChange}
          className="pointer-events-none absolute inset-0 h-5 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600"
        />

        {/* Maximum Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={selectedMax}
          onChange={handleMaxChange}
          className="pointer-events-none absolute inset-0 h-5 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600"
        />
      </div>

      {/* Price Inputs */}
      <div className="mt-5 flex items-center gap-2">
        <input
          type="number"
          min={min}
          max={selectedMax}
          value={selectedMin}
          onChange={handleMinChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <span className="text-gray-400">-</span>

        <input
          type="number"
          min={selectedMin}
          max={max}
          value={selectedMax}
          onChange={handleMaxChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>
    </div>
  );
};

export default PriceFilter;