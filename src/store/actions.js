export const ActionType = {
  PROMO_SLIDE_LEFT: `PROMO_SLIDE_LEFT`,
  PROMO_SLIDE_RIGHT: `PROMO_SLIDE_RIGHT`,
  ADD_COMMENT: `ADD_COMMENT`
};

export const promoSlideLeft = () => ({
  type: ActionType.PROMO_SLIDE_LEFT
});

export const promoSlideRight = () => ({
  type: ActionType.PROMO_SLIDE_RIGHT
});

export const addComment = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: (comment),
});
