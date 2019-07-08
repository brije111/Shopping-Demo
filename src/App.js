import React from "react";
import "./App.css";
import Products from "./components/Base";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
import { Provider } from "react-redux";
import store from "./store/index";
import CartComponent from "./components/cart/index";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/cart" component={CartComponent} />
        <Route path="/detail/:id" component={ProductDetail} />
        <Route path="/" component={Products} exact />
      </Router>
    </Provider>
  );
}

export default App;
