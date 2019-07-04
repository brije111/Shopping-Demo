import { PAGE_DATA, ADD_DATA ,FILTER_ALL , FILTER_EXPIRING_SOON, FILTER_EXPIRED} from "../constants/action-types";

export function actionAddData(data) {
  return { type: ADD_DATA, data };
}

export function actionFilterAll() {
  return { type: FILTER_ALL };
}

export function actionFilterExpired() {
  return { type: FILTER_EXPIRED };
}

export function actionFilterExpiringSoon() {
  return { type: FILTER_EXPIRING_SOON };
}

export function actionPageData(pageNum) {
  return { type: PAGE_DATA , pageNum};
}
