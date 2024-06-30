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
  console.log(allProducts.totalItems);
  let totalPages = allProducts.totalPages;
  console.log(allProducts.totalPages);

  return [allProducts.product, totalPages];
};

export default ProductCardContinerHook;
