import React from "react";
import Header from "./header";
import InfoTab from "./info-tab";
import Footer from "./footer";
import ProductInfo from "./product-info";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <ProductInfo/>
        <InfoTab/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
