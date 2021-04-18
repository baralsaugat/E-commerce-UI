import {
  getProducts,
  saveProduct,
  
  // deleteCategories,
} from "../../apis/productAPIs";
import {
  requestFail,
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
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
// export const removeCategories = (idArg) => async (dispatch) => {
//   try {
//     dispatch(requestPending());
//     const result = await deleteCategories(idArg);

//     dispatch(deleteCatsSuccess(result));
//     result.status === "success" && dispatch(fetchCategories());
//   } catch (error) {
//     const err = {
//       status: "error",
//       message: error.message,
//     };

//     dispatch(requestFail(err));
//   }
// };
