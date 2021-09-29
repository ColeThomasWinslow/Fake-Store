import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SElECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SElECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
export const addProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};
