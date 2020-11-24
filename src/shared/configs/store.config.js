import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import rootReducer from "../reducers/root.reducer";

const history = createBrowserHistory();
const saga = createSagaMiddleware();
const router = routerMiddleware(history);
const middlewares = [saga, router];

if (
    process.env.REACT_APP_ENV === "development" ||
    process.env.REACT_APP_ENV === "staging"
) {
    const { createLogger } = require("redux-logger");

    const logger = createLogger({
        collapsed: true,
    });
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

saga.run(rootSaga);

export default store;
