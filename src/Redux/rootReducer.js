import { combineReducers } from "redux";
import {
  productsReducer,
  selectProductReducer,
} from "./Reducers/product-reducers";

export const rootReducer = combineReducers({
  products: productsReducer,
  product: selectProductReducer,
});
