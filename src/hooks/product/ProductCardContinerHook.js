import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ProductCardContinerHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productsReducer.allProducts);

  useEffect(() => {
    dispatch(getAllProducts(8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(allProducts);
  return [allProducts];
};

export default ProductCardContinerHook;
