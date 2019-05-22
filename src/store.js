import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(sagas);

// export
export { store, history };
