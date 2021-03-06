import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categoryList: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.loading = true;
    },

    addCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    fetchAllCategorySuccess: (state, { payload }) => {
      state.categoryList = payload.result;
      state.loading = false;
    },

    requestFail: (state, { payload }) => {
      state.loading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    deleteCatsSuccess: (state, { payload }) => {
      state.status = payload.status;
      state.message = payload.message;
      state.loading = false;
    },
  },
});
const { reducer, actions } = categorySlice;

export const {
  requestFail,
  requestPending,
  fetchAllCategorySuccess,
  addCategorySuccess,
  deleteCatsSuccess
} = actions;

export default reducer;
