import {reducer} from './reducers'
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const store=createStore(reducer,applyMiddleware(thunk))
export * from './action-types'
export * from './action-creators'
