import { useGetData } from "../../Api/useGetData";
import { GET_ALL_BRAND } from "../type";

//get all category
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/brand?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_BRAND,
      payload: e.response,
    });
  }
};
