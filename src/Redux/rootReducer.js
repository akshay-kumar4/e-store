import { combineReducers } from "redux";
import { productsReducer } from "./Reducers/product-reducers";

export const rootReducer = combineReducers({
  products: productsReducer,
});
