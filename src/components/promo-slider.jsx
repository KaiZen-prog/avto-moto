import React from "react";

const PromoSlider = () => {
  return (
    <div className="promo-slider">
      <div className="promo-slider__slide">
        <img className="promo-slider__preview-image" src="img/desktop-slide-1.jpg" width="600" height="375" alt="превью автомобиля"/>
      </div>
      <div className="promo-slider__panel">
        <button className="promo-slider__left" type="button"></button>

        <ul className="promo-slider__preview-list">
          <li className="promo-slider__preview--item">
            <img className="promo-slider__preview-image" src="img/preview-1.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li className="promo-slider__preview--item">
            <img className="promo-slider__preview-image" src="../img/preview-2.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li className="promo-slider__preview--item">
            <img className="promo-slider__preview-image" src="./img/preview-3.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
        </ul>

        <button className="promo-slider__right" type="button"></button>
      </div>
    </div>
  );
};

PromoSlider.displayName = `PromoSlider`;

export default PromoSlider;
