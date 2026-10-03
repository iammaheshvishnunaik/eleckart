import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type LoggedInUser = Omit<User, "password">;
interface LoginPayload {
    user: LoggedInUser;
    token: string;
}
interface AuthState {
    user: LoggedInUser | null;
    token: string | null;
    isAuthenticated: boolean;
}

const savedAuth = localStorage.getItem("auth");

const initialState: AuthState = savedAuth
    ? JSON.parse(savedAuth)
    : {
        user: null,
        token: null,
        isAuthenticated: false,
    };

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        login: (
            state,
            action: PayloadAction<LoginPayload>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const {
    login,
    logout,
} = authSlice.actions;

export default authSlice.reducer;