import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./src/Slice/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
