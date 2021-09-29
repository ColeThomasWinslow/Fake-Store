import { combineReducers } from "redux";
import {
  addProductReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: addProductReducer,
});
export default reducers;
