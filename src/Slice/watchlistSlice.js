import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchList(state, action) {
      state.watchlist.push(action.payload);
    },
    removeFromWatchList(state, action) {
      state.watchlist = state.watchlist.filter(
        (item) => item.imdbID !== action.payload,
      );
    },
  },
});

export const { addToWatchList, removeFromWatchList } = watchlistSlice.actions;
export default watchlistSlice.reducer;
