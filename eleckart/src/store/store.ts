import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import authReducer from "./authSlice";

const savedCart = localStorage.getItem("cart");

const savedSelectedAddress = localStorage.getItem(
    "savedSelectedAddress"
);

const savedPaymentMethod = localStorage.getItem(
    "savedPaymentMethod"
);

const savedAuth = localStorage.getItem("auth");

const preloadedState = {
    cart: {
        items: savedCart ? JSON.parse(savedCart) : [],
    },

    checkout: {
        selectedAddress: savedSelectedAddress
            ? JSON.parse(savedSelectedAddress)
            : null,

        paymentMethod: savedPaymentMethod
            ? JSON.parse(savedPaymentMethod)
            : null,
    },
    auth: savedAuth
        ? JSON.parse(savedAuth)
        : {
            user: null,
            token: null,
            isAuthenticated: false,
        },
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
        auth: authReducer,
    },

    preloadedState,
});

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.items)
    );

    localStorage.setItem(
        "savedSelectedAddress",
        JSON.stringify(state.checkout.selectedAddress)
    );

    localStorage.setItem(
        "savedPaymentMethod",
        JSON.stringify(state.checkout.paymentMethod)
    );

    localStorage.setItem(
        "auth",
        JSON.stringify(state.auth)
    );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;