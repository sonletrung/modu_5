import { createSlice } from "@reduxjs/toolkit";
import { getCountry } from "../../service/CountryService";

const initialState = {
    country: [],
    search:""
};

const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCountry.fulfilled, (state, action) => {
                state.country = action.payload;
            })
            .addCase(getCountry.rejected, (state, action) => {
                // Handle rejected promise, e.g., set an error flag
                state.error = true;
            });
    }
});

export default CountrySlice.reducer;
