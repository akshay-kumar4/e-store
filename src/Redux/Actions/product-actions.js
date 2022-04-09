import axios from "../../Axios";
import { ActionTypes } from "../Constants/product-types";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/products/${id}`);
    dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
