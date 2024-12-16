import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    userSearch(state, action) {
      state.input = action.payload;
    },
  },
});

export const { userSearch } = searchSlice.actions;
export default searchSlice.reducer;
