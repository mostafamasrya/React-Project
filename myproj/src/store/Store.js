

import reducer from "./reducers/CompineReducers"
// import reducer from "./reducer";

import {applyMiddleware, createStore} from "redux"
import thunk  from "redux-thunk"


import { composeWithDevTools } from 'redux-devtools-extension';

// const store=createStore(reducer,composeWithDevTools())


const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


export default store


