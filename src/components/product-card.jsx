import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <h1 className="card__header">Марпех 11</h1>

      <ul className="card__parameters-list">
        <li>
          <p className="card__parameters-item">бензин</p>
        </li>
        <li>
          <p className="card__parameters-item">механика</p>
        </li>
        <li>
          <p className="card__parameters-item">100 л.с.</p>
        </li>
        <li>
          <p className="card__parameters-item">1.4 л</p>
        </li>
      </ul>

      <div className="card__price-wrapper">
        <p className="card__price">2 300 000 P</p>
        <del className="card__price--old">2 400 000 P</del>
      </div>

      <a className="card__order-button" href="#nowhere">Оставить заявку</a>
      <a className="card__loan-button" href="#nowhere">В кредит от 11 000 Р</a>
    </div>
  );
};

ProductCard.displayName = `ProductCard`;

export default ProductCard;
