import { getAProduct, updateProduct } from "../../apis/productAPIs";
import {
  requestFail,
  requestPending,
  fetchProductSuccess,
  updateProductSuccess,
} from "./SelectedProductSlice";

export const fetchAProduct = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getAProduct(_id);
    console.log(result);
    dispatch(fetchProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const updateAProduct = frmDt => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await updateProduct(frmDt);
    console.log(result);
    dispatch(updateProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
