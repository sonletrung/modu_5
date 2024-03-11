import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./Country/CountrySlice";

export const store = configureStore({
    reducer: {
        country: CountrySlice
    }
})
