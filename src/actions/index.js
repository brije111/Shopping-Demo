import {
  PAGE_DATA,
  ADD_DATA,
  FILTER_ALL,
  FILTER_EXPIRING_SOON,
  FILTER_EXPIRED,
  ADD_TO_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  DELETE_CART,
  FILTER_NONE
} from "../constants/action-types";

export function actionAddData(data) {
  return { type: ADD_DATA, data };
}

export function actionFilterNone() {
  return { type: FILTER_NONE };
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
  return { type: PAGE_DATA, pageNum };
}

export function actionAddToCart(prodId) {
  return { type: ADD_TO_CART, prodId };
}

export function actionIncrementCart(prodId) {
  return { type: INCREMENT_CART, prodId };
}

export function actionDecrementCart(prodId) {
  return { type: DECREMENT_CART, prodId };
}

export function actionDeleteCart(prodId) {
  return { type: DELETE_CART, prodId };
}
