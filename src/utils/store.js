import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "../reducer/userReducer";
import { thunk } from "redux-thunk";
import apiMiddleware from "./middleware/apiMiddleware";

export const store = configureStore({
  reducer: userSlice.reducer,
  middleware: () => [thunk, apiMiddleware]
});
