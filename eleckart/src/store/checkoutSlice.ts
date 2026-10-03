import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Address } from "../types/address";

export type PaymentMethod = "razorpay" | "cod";
interface CheckoutState {
    selectedAddress: Address | null;
    paymentMethod: PaymentMethod | null;
}

const initialState: CheckoutState = {
    selectedAddress: null,
    paymentMethod: null,
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,

    reducers: {
        setSelectedAddress: (
            state,
            action: PayloadAction<Address>
        ) => {
            state.selectedAddress = action.payload;
        },

        setPaymentMethod: (
            state,
            action: PayloadAction<PaymentMethod>
        ) => {
            state.paymentMethod = action.payload;
        },

        clearSelectedAddress: (state) => {
            state.selectedAddress = null;
        },
    },
});

export const {
    setSelectedAddress,
    setPaymentMethod,
    clearSelectedAddress,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;