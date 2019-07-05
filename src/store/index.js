import { createStore} from "redux";
import ProductReducer from "../reducers/ProductReducer";

const store = createStore(
  ProductReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);
export default store;
