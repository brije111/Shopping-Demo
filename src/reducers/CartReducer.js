import {
  INCREMENT_CART,
  DECREMENT_CART,
  DELETE_CART
} from "../constants/action-types";
import {
  getIncrementCartData,
  getDecrementCartData,
  getDeleteCartData
} from "../helper/Producthelper";
//import {getPageData} from './helper/Producthelper'

const initialState = {
  cart: {}
};
function CartReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_CART:
      return Object.assign({}, state, {
        cart: getIncrementCartData()
      });
    case DECREMENT_CART:
      return Object.assign({}, state, {
        cart: getDecrementCartData()
      });
    case DELETE_CART:
      return Object.assign({}, state, {
        cart: getDeleteCartData()
      });
    default:
      return { ...state };
  }
}
export default CartReducer;
