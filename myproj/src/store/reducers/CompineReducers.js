

import {combineReducers} from "redux"
// import {FavReducer} from "../reducers/CountReducer"
// import {UserReducer} from "../reducers/UserReducer"
import FavReducer from "../reducers/CountReducer"
import UserReducer from "../reducers/UserReducer"


export default combineReducers({
    count:FavReducer,
    users:UserReducer

})