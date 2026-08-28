import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartItems {
  items: CartItem[];
}

const initialState: CartItems = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      // If product is already in cart, do nothing
      if (existingItem) {
        return;
      }
      // Otherwise add it with quantity 1
      state.items.push({
        ...action.payload,
        quantity: 1,
      });
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item._id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item._id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

      clearCart: (state) => {
          state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;