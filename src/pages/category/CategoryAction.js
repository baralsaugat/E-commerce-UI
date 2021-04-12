import { saveCategory } from "../../apis/categoriesAPIs";
import {
  requestFail,
  requestPending,
  fetchAllCategorySuccess,
  addCategorySuccess,
} from "./CategorySlice";

export const addNewCategory = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await saveCategory(frmDt);

    dispatch(addCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
