import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const savedCart = localStorage.getItem("cart");

const preloadedState = {
  cart: {
    items: savedCart ? JSON.parse(savedCart) : [],
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem(
    "cart",
    JSON.stringify(state.cart.items)
  );
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;