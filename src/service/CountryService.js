import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountry = createAsyncThunk(
    'country/getCountry',
    async () => {
        try {
            const res = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');
            console.log(res);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
);
