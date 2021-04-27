export const ActionType = {
  PROMO_SLIDE_LEFT: `PROMO_SLIDE_LEFT`,
  PROMO_SLIDE_RIGHT: `PROMO_SLIDE_RIGHT`,
  CHANGE_INFO_TAB: `CHANGE_INFO_TAB`,
  ADD_REVIEW: `ADD_REVIEW`
};

export const promoSlideLeft = () => ({
  type: ActionType.PROMO_SLIDE_LEFT
});

export const promoSlideRight = () => ({
  type: ActionType.PROMO_SLIDE_RIGHT
});

export const changeInfoTab = (tab) => ({
  type: ActionType.CHANGE_INFO_TAB,
  payload: tab
});

export const addReview = (review) => ({
  type: ActionType.ADD_REVIEW,
  payload: (review),
});
