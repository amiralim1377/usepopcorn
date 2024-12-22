import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./src/Slice/searchSlice";
import watchlistReducer from "./src/Slice/watchlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
