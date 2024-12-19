import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./src/Slice/searchSlice";
import watchlistReducer from "./src/Slice/watchlistSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
