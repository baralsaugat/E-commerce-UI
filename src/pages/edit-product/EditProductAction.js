import { getAProduct } from "../../apis/productAPIs";
import {
  requestFail,
  requestPending,
  fetchProductSuccess,
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
