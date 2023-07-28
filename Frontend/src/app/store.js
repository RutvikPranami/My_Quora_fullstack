import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import searchResultsReducer from "../feature/searchResultslice";

export default configureStore({
  reducer: {
    user: userReducer,
    SEARCHRESULTS: searchResultsReducer,
  },
});
