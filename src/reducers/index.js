import ProductReducer from "../reducers/product";
import { combineReducers } from 'redux';
import CartReducer from "../reducers/cart";

export default combineReducers({prd:ProductReducer, crt:CartReducer});