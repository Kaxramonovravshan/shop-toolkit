import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    total: 0,
    newTotal: 0,
    promoCod: "",
    promoArray: [
      { percent: 90, name: "SHIFT" },
      { percent: 50, name: "ABC" },
      { percent: 30, name: "A1B2C3" },
      { percent: 10, name: "BF41Z3" }
    ]
  },
  reducers: {
    addCart: (state, action) => {
      state.total += Number(action.payload.price);
      state.carts.push(action.payload);
    },
    getPromo: (state, action) => {
      state.promoCod = action.payload.toUpperCase();
    },
    verify: (state, action) => {
      if (state.total <= 1000) {
        return;
      } else {
        state.promoArray.map((itm) => {
          if (itm.name === state.promoCod) {
            state.newTotal = (state.total / 100) * (100 - itm.percent);
          }
        });
      }
    }
  }
});

export const cartAction = cartSlice.actions;

export default cartSlice;
