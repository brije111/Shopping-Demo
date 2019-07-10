import {
    ADD_TO_CART,
    INCREMENT_CART,
    DECREMENT_CART,
    DELETE_CART
  } from "../constants/action-types";
  import {
    getCartData,
    getIncrementCartData,
    getDecrementCartData,
    getDeleteCartData
  } from "../helper/index";
  //import {getPageData} from './helper/Producthelper'
  
  const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || {}
  };
  function CartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return Object.assign({}, state, {
          cart: getCartData(state.cart, action.prodId)
        });
      case INCREMENT_CART:
        localStorage.setItem(
          "cart",
          JSON.stringify(getIncrementCartData(state.cart, action.prodId))
        );
        return Object.assign({}, state, {
          cart: getIncrementCartData(state.cart, action.prodId)
        });
      case DECREMENT_CART:
        localStorage.setItem(
          "cart",
          JSON.stringify(getDecrementCartData(state.cart, action.prodId))
        );
        return Object.assign({}, state, {
          cart: getDecrementCartData(state.cart, action.prodId)
        });
      case DELETE_CART:
        localStorage.setItem(
          "cart",
          JSON.stringify(getDeleteCartData(state.cart, action.prodId))
        );
        return Object.assign({}, state, {
          cart: getDeleteCartData(state.cart, action.prodId)
        });
      default:
        return { ...state };
    }
  }
  export default CartReducer;
  