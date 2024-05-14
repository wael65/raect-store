import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import HomeProduct from "../../Components/Home/HomeProduct";
import NavBar from "../../Components/Home/NavBar";
import AllProduct from "../../Components/Products/AllProduct";
import OfferBanner from "../../Components/Home/OfferBanner";
import HomeBrand from "../../Components/Home/HomeBrand";

// import useGetData from "../../hooks/useGetData";

const HomePage = () => {
  // console.log(useGetData("https://simple-backend-523x.onrender.com/brand"));
  return (
    <div className="home d-flex flex-column align-content-start">
      <NavBar />
      <Slider />
      <HomeCategory />
      <HomeProduct />
      <OfferBanner />
      <AllProduct />
      <HomeBrand />
    </div>
  );
};

export default HomePage;
