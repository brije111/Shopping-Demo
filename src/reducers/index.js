import {
  ADD_DATA,
  FILTER_ALL,
  FILTER_EXPIRED,
  FILTER_EXPIRING_SOON,
  PAGE_DATA,
  ADD_TO_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  DELETE_CART,
  FILTER_NONE
} from "../constants/action-types";
import {
  onExpiredFilterHelper,
  onExpiringSoonFilterHelper,
  getPageData,
  getCartData,
  getIncrementCartData,
  getDecrementCartData,
  getDeleteCartData
} from "../helper/index";
//import {getPageData} from './helper/Producthelper'

const initialState = {
  data: [],
  originData: [],
  current_page: 1,
  per_page_doc: 9,
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  choosenFilter: "none"
};
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state, {
        data: getPageData(action.data),
        originData: action.data
      });
    case FILTER_NONE:
      return Object.assign({}, state, {
        data: getPageData(state.originData),
        choosenFilter: "none"
      });
    case FILTER_ALL:
      return Object.assign({}, state, {
        data: state.originData,
        choosenFilter: "all"
      });

    case FILTER_EXPIRED:
      return Object.assign({}, state, {
        data: onExpiredFilterHelper(state.originData),
        choosenFilter: "expired"
      });
    case FILTER_EXPIRING_SOON:
      return Object.assign({}, state, {
        data: onExpiringSoonFilterHelper(state.originData),
        choosenFilter: "expiring"
      });
    case PAGE_DATA:
      return Object.assign({}, state, {
        data: getPageData(state.originData, action.pageNum, state.per_page_doc),
        current_page: action.pageNum
      });
    case ADD_TO_CART:
      localStorage.setItem(
        "cart",
        JSON.stringify(getCartData(state.cart, action.prodId))
      );
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
export default ProductReducer;
