import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";

const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: [action.payload, ...state.reviews],
      });
  }

  return state;
};

export {reviewsReducer};
