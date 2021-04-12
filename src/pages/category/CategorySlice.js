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
      state.categoryList = payload;
      state.status = payload.status;
      state.message = payload.message;
    },

    requestFail: (state, { payload }) => {
      state.loading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = categorySlice;

export const {
  requestFail,
  requestPending,
  fetchAllCategorySuccess,
  addCategorySuccess,
} = actions;

export default reducer;
