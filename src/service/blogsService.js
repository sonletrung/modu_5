import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await axios.get('http://localhost:8080/profile');
        console.log(res)
        return res.data
    }
)
export const addBlog = createAsyncThunk(
    'blogs/addBlog',
    async (data) => {
        const res = await axios.post('http://localhost:8080/profile',data);
        return res.data
    }
)
export const delBlog = createAsyncThunk(
    'blogs/addBlog',
    async (id) => {
        const res = await axios.delete(`http://localhost:8080/profile/${id}`);
        return res.data
    }
)