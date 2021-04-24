import {combineReducers} from "redux";
import {commentsReducer} from "./comments-reducer/comments-reducer";
import {appReducer} from "./app-reducer/app-reducer";

export const NameSpace = {
  APP: `APP`,
  COMMENTS: `COMMENTS`
};

export default combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.COMMENTS]: commentsReducer
});
