import React from "react";
import Header from "./header";
import Slider from "./slider";
import Features from "./features";
import Tab from "./tab";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Slider/>
        <Features/>
        <Tab/>
      </main>
      <Footer/>
    </>
  );
};

App.displayName = `App`;

export default App;
