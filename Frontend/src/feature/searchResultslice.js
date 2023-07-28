import { createSlice } from "@reduxjs/toolkit";

export const searchResultSlice = createSlice({
  name: "SEARCHRESULTS",
  initialState: {
    SEARCHRESULTS: null,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.SEARCHRESULTS = action.payload;
    },
  },
});

export const { setSearchResults } = searchResultSlice.actions;
export const selectSearchResults = (state) => state.SEARCHRESULTS.SEARCHRESULTS;
export default searchResultSlice.reducer;
