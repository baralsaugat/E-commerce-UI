import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/CategorySlice";
import productReducer from "./pages/products/ProductSlice";
import selectedProductReducer from "./pages/edit-product/SelectedProductSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    selectedProduct: selectedProductReducer,
  },
});

export default store;
