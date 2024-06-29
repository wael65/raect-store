import { GET_ALL_BRAND } from "../type";

const inital = {
  brand: [],
  loading: true,
};
const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default brandReducer;
