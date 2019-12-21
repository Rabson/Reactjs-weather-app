import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";

import forecast from "./reducer";
import { ForecastState } from "./types";
import thunk from 'redux-thunk'

const reducer = combineReducers({
    forecast
});

export interface State {
    forecast: ForecastState;
}

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState?: State) =>
    createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(logger, thunk))
    );

const store = configureStore();

export default store;
