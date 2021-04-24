import {
  getProducts,
  saveProduct,
  productDelete,
} from "../../apis/productAPIs";
import {
  requestFail,
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
  deleteProductSuccess,
} from "./ProductSlice";

export const addNewProduct = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await saveProduct(frmDt);

    dispatch(addProductSuccess(result));

    result.status === "success" && dispatch(fetchProducts());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getProducts();

    dispatch(fetchAllProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const deleteProduct = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await productDelete(_id); //{status, message, result:[]}

    dispatch(deleteProductSuccess(result));

    result.status === "success" && dispatch(fetchProducts());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
