import {extend} from "../../utils/common";
import {ActionType} from "../actions";

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return extend(state, {
        comments: [action.payload, ...state.comments],
      });
  }

  return state;
};

export {commentsReducer};
