import { createStore} from "redux";
import ProductReducer from "../reducers/index";

const store = createStore(
  ProductReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);
export default store;
