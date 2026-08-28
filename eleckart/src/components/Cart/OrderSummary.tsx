interface OrderSummaryProps {
  subtotal: number;
  totalSavings: number;
}

const OrderSummary = ({
  subtotal,
  totalSavings,
}: OrderSummaryProps) => {
  const deliveryCharge = 0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h2 className="border-b border-gray-200 pb-4 text-lg font-bold text-gray-900">
        Price Details
      </h2>

      {/* Price Details */}
      <div className="space-y-4 py-5">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Subtotal
          </span>

          <span className="font-medium text-gray-900">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Savings */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Total Savings
          </span>

          <span className="font-medium text-green-600">
            -₹{totalSavings.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Delivery */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Delivery
          </span>

          <span className="font-semibold text-green-600">
            FREE
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between border-t border-gray-200 py-5">
        <span className="text-lg font-bold text-gray-900">
          Total Amount
        </span>

        <span className="text-xl font-bold text-gray-900">
          ₹{total.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Savings Message */}
      {totalSavings > 0 && (
        <div className="mb-5 rounded-lg bg-green-50 px-3 py-2 text-center text-sm font-medium text-green-700">
          🎉 You are saving ₹
          {totalSavings.toLocaleString("en-IN")} on this order
        </div>
      )}

      {/* Checkout */}
      <button className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;