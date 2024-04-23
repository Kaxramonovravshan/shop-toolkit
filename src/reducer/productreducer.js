import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        name: "lavash",
        img: "",
        price: "100",
        type: "oziq-ovqat",
        date: "2024-04-03",
        desc: "zur"
      },
      {
        name: "iphone",
        img: "",
        price: "1000",
        type: "Texnika",
        date: "2024-04-03",
        desc: "qimmat"
      },
      {
        name: "MacBook",
        img: "",
        price: "10000",
        type: "Texnika",
        date: "2024-04-03",
        desc: "zur juda"
      }
    ],
    types: [
      {
        value: 1,
        label: "Texnika"
      },
      {
        value: 2,
        label: "Kiyim-kechak"
      },
      {
        value: 3,
        label: "oziq-ovqat"
      },
      {
        value: 4,
        label: "parfume"
      }
    ],
    prObject: {
      name: "",
      img: "",
      price: "",
      type: "",
      date: "",
      desc: ""
    },
    
  },
  reducers: {
    getName: (state, action) => {
      state.prObject.name = action.payload;
    },
    getPrice: (state, action) => {
      state.prObject.price = action.payload;
    },
    getDate: (state, action) => {
      state.prObject.date = action.payload;
    },
    getDesc: (state, action) => {
      state.prObject.desc = action.payload;
    },
    getType: (state, action) => {
      if (action.payload.__isNew__) {
        delete action.payload.__isNew__;
        state.types.push({ ...action.payload, value: state.types.length + 1 });
      }
      state.prObject.type = action.payload.label;
    },
    getImg: (state, action) => {
      state.prObject.img = action.payload;
    },
    save: (state, action) => {
      state.products.push(state.prObject);
      state.prObject = {
        name: "",
        img: "",
        price: "",
        type: "",
        date: "",
        desc: ""
      };
    }
  }
});

function getImg(e) {
  return (dispatch) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch({ type: "product/getImg", payload: reader.result });
    };
  };
}

export const productAction = { ...productSlice.actions, getImg };

export default productSlice;
