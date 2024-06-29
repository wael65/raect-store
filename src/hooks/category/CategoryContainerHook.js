import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const CategoryContainerHook = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.categoryReducer.category);

  useEffect(() => {
    dispatch(getAllCategory(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [allCategory];
};

export default CategoryContainerHook;
