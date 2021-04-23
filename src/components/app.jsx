import React from "react";
import Header from "./header";
import Slider from "./slider";
import ProductCard from "./product-card";
import Tab from "./tab";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Slider/>
        <ProductCard/>
        <Tab/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
