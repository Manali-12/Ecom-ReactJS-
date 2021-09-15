import { combineReducers } from "redux";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    user: userReducer
}, console.log(userReducer, "rootReducer.js")
);
export default rootReducer;
