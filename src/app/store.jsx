import counterReducer from "../feature/counter/reducer";
import { createStore, combineReducers } from "redux";
const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  initialState
);
export default store;
