import React from "react";
import "./App.css";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/'>
      <Products />
      </Link>
    </div>
    <Route path="/detail/" component={ProductDetail} />
    <Route path="/" component={Products} />
    </Router>
  );
}

export default App;
