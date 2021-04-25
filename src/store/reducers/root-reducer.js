import {combineReducers} from "redux";
import {commentsReducer} from "./comments-reducer/comments-reducer";
import {appProcess} from "./app-process/app-process";

export const NameSpace = {
  APP_PROCESS: `APP_PROCESS`,
  COMMENTS: `COMMENTS`
};

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.COMMENTS]: commentsReducer
});
