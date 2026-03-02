import { combineReducers } from "redux";
import productReducer from "./reducer/productReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    productReducer,
    userReducer
})

export default rootReducer