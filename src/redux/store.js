import { configureStore } from "@reduxjs/toolkit";
import booklistSlice from "./slices/booklistSlice";
import { wishlistSlice } from "./slices/wishlistSlice";
export const store = configureStore({
	reducer: {
		booklist: booklistSlice.reducer,
		wishlist: wishlistSlice.reducer,
	},
});
