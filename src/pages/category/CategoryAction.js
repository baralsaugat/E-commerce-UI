import {
  getCategories,
  saveCategory,
  deleteCategories,
} from "../../apis/categoriesAPIs";
import {
  requestFail,
  requestPending,
  fetchAllCategorySuccess,
  addCategorySuccess,
  deleteCatsSuccess,
  updateCategorySuccess,
} from "./CategorySlice";

export const addNewCategory = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await saveCategory(frmDt);

    dispatch(addCategorySuccess(result));

    result.status === "success" && dispatch(fetchCategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getCategories();

    dispatch(fetchAllCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const removeCategories = (idArg) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await deleteCategories(idArg);

    dispatch(deleteCatsSuccess(result));
    result.status === "success" && dispatch(fetchCategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const categoryUpdate = (idArg) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await updateCategory(idArg);

    dispatch(updateCategorySuccess(result));
    result.status === "success" && dispatch(fetchCategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
