import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {PromoSlides, InfoTabs} from "../../../const";
import {getPreviousElement, getNextElement} from "../../../utils/common";

const initialState = {
  currentPromoSlide: PromoSlides[0],
  isLeftPromoSliderButtonDisabled: true,
  isRightPromoSliderButtonDisabled: false,
  activeInfoTab: InfoTabs.CHARACTERISTICS
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PROMO_SLIDE_LEFT:
      return extend(state, {
        currentPromoSlide: getPreviousElement(PromoSlides, state.currentPromoSlide),
        isLeftPromoSliderButtonDisabled: getPreviousElement(PromoSlides, state.currentPromoSlide) === PromoSlides[0],
        isRightPromoSliderButtonDisabled: false
      });

    case ActionType.PROMO_SLIDE_RIGHT:
      return extend(state, {
        currentPromoSlide: getNextElement(PromoSlides, state.currentPromoSlide),
        isLeftPromoSliderButtonDisabled: false,
        isRightPromoSliderButtonDisabled: getNextElement(PromoSlides, state.currentPromoSlide) === PromoSlides[PromoSlides.length - 1]
      });

    case ActionType.CHANGE_INFO_TAB:
      return extend(state, {
        activeInfoTab: action.payload
      });
  }

  return state;
};

export {appProcess};
