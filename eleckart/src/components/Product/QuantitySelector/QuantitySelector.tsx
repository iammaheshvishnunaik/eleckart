import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center">

      {/* Decrease */}
      <button
        type="button"
        onClick={decreaseQuantity}
        disabled={quantity === 1}
        className="flex h-10 w-10 items-center justify-center rounded-l-md border border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={16} />
      </button>

      {/* Quantity */}
      <div className="flex h-10 w-12 items-center justify-center border-y border-gray-300 font-medium">
        {quantity}
      </div>

      {/* Increase */}
      <button
        type="button"
        onClick={increaseQuantity}
        disabled={quantity === 10}
        className="flex h-10 w-10 items-center justify-center rounded-r-md border border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={16} />
      </button>

    </div>
  );
};

export default QuantitySelector;