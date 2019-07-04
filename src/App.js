import React from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import {Provider} from 'react-redux';
import store from "./store/index";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route path="/detail" component={ProductDetail} />
      <Route path="/" component={Products} exact />
    </Router>
    </Provider>
  );
}

export default App;
