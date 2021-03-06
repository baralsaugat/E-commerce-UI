import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  product: {},
};

const selectedProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.loading = true;
    },

    // addProductSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.status = payload.status;
    //   state.message = payload.message;
    // },

    fetchProductSuccess: (state, { payload }) => {
      state.product = payload || {};
      state.loading = false;
    },

    updateProductSuccess: (state, { payload }) => {
      state.product = payload || {};
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
const { reducer, actions } = selectedProductSlice;

export const {
  requestFail,
  requestPending,
  fetchProductSuccess,
  updateProductSuccess,

  // deleteCatsSuccess,
} = actions;

export default reducer;
