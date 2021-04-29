import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import "./sass/style.scss";
import App from "./components/app/app";


const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
