import { createStore, combineReducers } from "redux";
import reducerCounter from "./modules/contador/reducer";
const reducers = combineReducers({ result: reducerCounter });

const store = createStore(reducers);

export default store;
