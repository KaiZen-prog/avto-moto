import React from "react";
import Header from "./header";
import PromoSlider from "./promo-slider";
import ProductCard from "./product-card";
import InfoSlider from "./info-slider";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <PromoSlider/>
        <ProductCard/>
        <InfoSlider/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
