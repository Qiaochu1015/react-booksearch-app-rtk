import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooksByInput = createAsyncThunk(
	"getBooksByInput",
	async (arg, { getState, rejectWithValue }) => {
		try {
			const { data } = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${arg}&key=AIzaSyBKWLCdxtyji7xZjqQjPklHHgQBnuG2_q4`
			);
			//console.log(data.items)
			return data.items;
		} catch (error) {
			rejectWithValue(error.response);
		}
	}
);

const booklistSlice = createSlice({
	name: "booklist",
	initialState: {
		books: [],
		isSuccess: false,
		message: "",
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBooksByInput.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getBooksByInput.fulfilled, (state, action) => {
				state.loading = false;
				state.books = action.payload;
				state.isSuccess = true;
			})
			.addCase(getBooksByInput.rejected, (state, action) => {
				state.message = action.payload;
				state.loading = false;
				state.isSuccess = false;
			});
	},
});

export default booklistSlice;
