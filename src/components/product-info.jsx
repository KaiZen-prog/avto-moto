import React from "react";
import PromoSlider from "./promo-slider";
import ProductCard from "./product-card";

const ProductInfo = () => {
  return (
    <section className="product-info-section">
      <PromoSlider/>
      <ProductCard/>
    </section>
  );
};

ProductInfo.displayName = `ProductInfo`;

export default ProductInfo;
