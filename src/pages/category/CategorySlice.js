import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categoryList: [],
  show: false,
  selectedCategory: {},
  updateResponse:{}
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
    updateCategorySuccess: (state, { payload }) => {
      state.updateResponse = payload.;
    
      state.loading = false;
    },
    toggleCategoryEditModal: (state, ) => {
      state.show = !state.show;
      if (state.show)
    },

    selectACategory: (state, {payload})=> {
state.payload
    }
  },
});
const { reducer, actions } = categorySlice;

export const {
  requestFail,
  requestPending,
  fetchAllCategorySuccess,
  addCategorySuccess,
  deleteCatsSuccess,
  toggleCategoryEditModal
} = actions;

export default reducer;
