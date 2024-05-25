import { useGetData } from "../../Api/useGetData";
import { GET_ALL_CATEGORY } from "../type";

//get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/category?limit=${limit}`);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: e.response,
    });
  }
};
