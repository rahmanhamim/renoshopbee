import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Newsletter from "../Newsletter/Newsletter";
import Offers from "../Offers/Offers";
import TopLinkBar from "../TopLinkBar/TopLinkBar";

const Home = () => {
 return (
  <>
   <TopLinkBar />
   <NavigationBar />
   <Banner />
   <BestSellers />
   <Offers />
   <FeaturedProducts />
   <Newsletter />
  </>
 );
};

export default Home;
