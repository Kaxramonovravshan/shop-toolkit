import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducer/productreducer";
import { thunk } from "redux-thunk";
import cartSlice from "../reducer/cartReducer";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: () => [thunk]
});
