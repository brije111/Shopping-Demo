import {
  ADD_DATA,
  FILTER_ALL,
  FILTER_EXPIRED,
  FILTER_EXPIRING_SOON,
  PAGE_DATA
} from "../constants/action-types";
import {
  onExpiredFilterHelper,
  onExpiringSoonFilterHelper,
  getPageData
} from "../helper/Producthelper";
//import {getPageData} from './helper/Producthelper'

const initialState = {
  data: [],
  originData: [],
  current_page: 1,
  per_page_doc: 9
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state, {
        data: getPageData(action.data),
        originData: action.data
      });
    case FILTER_ALL:
      return Object.assign({}, state, {
        data: state.originData
      });
    case FILTER_EXPIRED:
      return Object.assign({}, state, {
        data: onExpiredFilterHelper(state.originData)
      });
    case FILTER_EXPIRING_SOON:
      return Object.assign({}, state, {
        data: onExpiringSoonFilterHelper(state.originData)
      });
    case PAGE_DATA:
      return Object.assign({}, state, {
        data: getPageData(
          state.originData,
          action.pageNum,
          state.per_page_doc
        ),
        current_page: action.pageNum
      });
    default:
      return { ...state };
  }
}
export default rootReducer;
