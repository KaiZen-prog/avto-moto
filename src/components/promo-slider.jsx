import React from "react";
import {connect} from "react-redux";
import {promoSlideLeft, promoSlideRight} from "../store/actions";
import PropTypes from "prop-types";

const PromoSlider = (props) => {

  const {
    currentPromoSlider,
    toLeftSlideClick,
    toRightSlideClick,
    isLeftButtonDisabled,
    isRightButtonDisabled
  } = props;

  return (
    <div className="product-section__promo-slider promo-slider">
      <div className="promo-slider__slide">
        <img className="promo-slider__preview-image" src={currentPromoSlider} width="600" height="375" alt="превью автомобиля"/>
      </div>
      <div className="promo-slider__panel">
        <button
          className={
            `promo-slider__button promo-slider__left-button${
              isLeftButtonDisabled ? ` promo-slider__left-button--disabled` : ``
            }`
          }
          type="button"
          disabled={isLeftButtonDisabled}
          onClick={toLeftSlideClick}
        >
        </button>

        <ul className="promo-slider__preview-list">
          <li>
            <img className="promo-slider__preview-image" src="img/preview-1.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li>
            <img className="promo-slider__preview-image" src="../img/preview-2.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
          <li>
            <img className="promo-slider__preview-image" src="./img/preview-3.jpg" width="128" height="80" alt="превью автомобиля"/>
          </li>
        </ul>

        <button
          className={
            `promo-slider__button promo-slider__right-button${
              isRightButtonDisabled ? ` promo-slider__right-button--disabled` : ``
            }`
          }
          type="button"
          disabled={isRightButtonDisabled}
          onClick={toRightSlideClick}
        >
        </button>
      </div>
    </div>
  );
};

PromoSlider.displayName = `PromoSlider`;

PromoSlider.propTypes = {
  currentPromoSlider: PropTypes.string.isRequired,

  toLeftSlideClick: PropTypes.func.isRequired,
  toRightSlideClick: PropTypes.func.isRequired,

  isLeftButtonDisabled: PropTypes.bool.isRequired,
  isRightButtonDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentPromoSlider: state.APP_PROCESS.currentPromoSlide,
  isLeftButtonDisabled: state.APP_PROCESS.isLeftPromoSliderButtonDisabled,
  isRightButtonDisabled: state.APP_PROCESS.isRightPromoSliderButtonDisabled
});

const mapDispatchToProps = (dispatch) => ({
  toLeftSlideClick() {
    dispatch(promoSlideLeft());
  },

  toRightSlideClick() {
    dispatch(promoSlideRight());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoSlider);
