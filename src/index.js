import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {commentsReducer} from "./store/reducers/comments-reducer";
import "./sass/style.scss";
import App from "./components/app";


const store = createStore(
    commentsReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
