import React from "react";
import Header from "./header";
import InfoSlider from "./info-slider";
import Footer from "./footer";
import ProductInfo from "./product-info";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <ProductInfo/>
        <InfoSlider/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
