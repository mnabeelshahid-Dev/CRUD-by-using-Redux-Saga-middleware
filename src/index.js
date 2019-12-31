import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import "./styles.css";
import { createStore , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
