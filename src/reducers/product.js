import {
    ADD_DATA,
    FILTER_ALL,
    FILTER_EXPIRED,
    FILTER_EXPIRING_SOON,
    PAGE_DATA,
    FILTER_NONE
  } from "../constants/action-types";
  import {
    onExpiredFilterHelper,
    onExpiringSoonFilterHelper,
    getPageData,
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
      default:
        return { ...state };
    }
  }
  export default ProductReducer;
  