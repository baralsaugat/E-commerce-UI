import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/CategorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
