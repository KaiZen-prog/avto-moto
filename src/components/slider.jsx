import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__slide">
        <img className="slider__preview-image" src="img/desktop-slide-1.jpg" width="600" height="375" alt="превью автомобиля"/>
      </div>
      <div className="slider__panel">
        <button className="slider__left" type="button"></button>

        <ul className="slider__preview-list">
          <li className="slider__preview--item">
            <img className="slider__preview-image" src="img/preview-1.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li className="slider__preview--item">
            <img className="slider__preview-image" src="../img/preview-2.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li className="slider__preview--item">
            <img className="slider__preview-image" src="./img/preview-3.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
        </ul>

        <button className="slider__right" type="button"></button>
      </div>
    </div>
  );
};

Slider.displayName = `Slider`;

export default Slider;
