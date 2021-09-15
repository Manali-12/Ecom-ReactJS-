import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger"
import rootReducer from "./Reducers/rootReducer"


export const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
console.log(store, "store it is")
export default store;