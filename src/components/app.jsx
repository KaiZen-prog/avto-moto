import React from "react";
import Header from "./header";
import InfoTabSection from "./info-tab-section";
import Footer from "./footer";
import ProductSection from "./product-section";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <ProductSection/>
        <InfoTabSection/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
