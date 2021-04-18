import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.loading = true;
    },

    addProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    fetchAllProductSuccess: (state, { payload }) => {
      state.productList = payload;
      state.loading = false;
    },

    requestFail: (state, { payload }) => {
      state.loading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    // deleteCatsSuccess: (state, { payload }) => {
    //   state.status = payload.status;
    //   state.message = payload.message;
    //   state.loading = false;
    // },
  },
});
const { reducer, actions } = productSlice;

export const {
  requestFail,
  requestPending,
  fetchAllProductSuccess,
  addProductSuccess,
  // deleteCatsSuccess,
} = actions;

export default reducer;
