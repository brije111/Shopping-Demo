import React from "react";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/detail" component={ProductDetail} />
      <Route path="/" component={Products} exact />
    </Router>
  );
}

export default App;
