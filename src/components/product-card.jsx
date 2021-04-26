import React from "react";

const ProductCard = () => {
  return (
    <div className="product-section__product-card product-card">
      <h1 className="product-card__header">Марпех 11</h1>

      <ul className="product-card__parameters-list">
        <li>
          <p className="product-card__parameters-item product-card__parameters-item--fuel">бензин</p>
        </li>
        <li>
          <p className="product-card__parameters-item product-card__parameters-item--transmission">механика</p>
        </li>
        <li>
          <p className="product-card__parameters-item product-card__parameters-item--power">100 л.с.</p>
        </li>
        <li>
          <p className="product-card__parameters-item product-card__parameters-item--volume">1.4 л</p>
        </li>
      </ul>

      <div className="product-card__price-wrapper">
        <p className="product-card__price">2 300 000 &#x20bd;</p>
        <p className="product-card__price product-card__price--old">2 &nbsp;400 000 &#x20bd;</p>
      </div>

      <a className="product-card__order-button" href="#nowhere">Оставить заявку</a>
      <a className="product-card__loan-button" href="#nowhere">В кредит от 11 000 &#x20bd;</a>
    </div>
  );
};

ProductCard.displayName = `ProductCard`;

export default ProductCard;
