import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCardContiner from "../../Components/Products/ProductCardContiner";
import ProductDetails from "../../Components/Products/ProductDetails";
// import CategoryHeader from "../../Components/Category/CategoryHeader";
// import CardProductsContainer from "../../Components/Products/CardProductsContainer";
// import ProductDetalis from "../../Components/Products/ProductDetalis";
// import RateContainer from "../../Components/Rate/RateContainer";
// import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";
// import ViewProductsDetalisHook from "./../../hook/products/view-products-detalis-hook";

const ProductDetailsPage = ({ prod }) => {
  //   const { id } = useParams();
  //   const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
  //   if (prod) var items = prod.slice(0, 4);
  return (
    <div style={{ minHeight: "670px" }}>
      {/* <CategoryHeader /> */}
      <Container>
        <ProductDetails />
        {/* <RateContainer /> */}
        <ProductCardContiner prod={prod} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
