import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

const BrandContainerHook = () => {
  const dispatch = useDispatch();
  const allBrand = useSelector((state) => state.brandReducer.brand);

  useEffect(() => {
    dispatch(getAllBrand());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [allBrand];
};

export default BrandContainerHook;
