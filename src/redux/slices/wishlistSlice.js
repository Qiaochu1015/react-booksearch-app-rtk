import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState: {
		books: [],
		loading: false,
	},
	reducers: {
		add: (state, action) => {
			if (state.books.every((book) => book.id !== action.payload.id)) {
				state.books.push(action.payload);
			}
		},
		remove: (state, action) => {
			state.books = state.books.filter(
				(book) => book.id !== action.payload.id
			);
		},
	},
});

export const { add, remove } = wishlistSlice.actions;
