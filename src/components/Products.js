import React, { Component } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
//import { getAllProduct } from "../helper/Producthelper";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      originData: []
    };
    this.getAllProduct = this.getAllProduct.bind(this);
    this.onAllFilter = this.onAllFilter.bind(this);
    this.onExpiredFilter = this.onExpiredFilter.bind(this);
    this.onExpiringSoonFilter = this.onExpiringSoonFilter.bind(this);
  }

  componentDidMount() {
    axios
      .get("assets/raw/products.json")
      .then(response => {
        console.log(response.data);
        const _data = this.getAllProduct(response.data);
        this.setState({ data: _data, originData: _data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllProduct(json, products = []) {
    if (json.hasOwnProperty("children")) {
      json.children.forEach(element => {
        this.getAllProduct(element, products);
      });
    } else {
      products.push(json);
    }
    return products;
  }

  onAllFilter() {
    this.setState({
      data: this.state.originData,
      originData: this.state.originData
    });
  }

  onExpiredFilter() {
    const filteredList = this.state.originData.filter(item => {
      const warrantyPeriod = parseInt(
        item.warrantyPeriod.slice(0, item.warrantyPeriod.indexOf("year"))
      );
      const extendedWarranty = parseInt(
        item.extendedWarranty.slice(0, item.extendedWarranty.indexOf("year"))
      );
      const sum =
        (isNaN(warrantyPeriod) ? 0 : warrantyPeriod) +
        (isNaN(extendedWarranty) ? 0 : extendedWarranty);

      const tempArr = item.orderedDate.split("/");
      const expiringDate = new Date(
        parseInt(tempArr[2]) + sum,
        tempArr[1],
        tempArr[0]
      );
      const currentDate = new Date();

      //console.log(warrantyPeriod, extendedWarranty, sum);
      return expiringDate - currentDate <= 0;
    });
    this.setState({
      data: filteredList,
      originData: this.state.originData
    });
  }

  onExpiringSoonFilter() {
    const filteredList = this.state.originData.filter(item => {
      const warrantyPeriod = parseInt(
        item.warrantyPeriod.slice(0, item.warrantyPeriod.indexOf("year"))
      );
      const extendedWarranty = parseInt(
        item.extendedWarranty.slice(0, item.extendedWarranty.indexOf("year"))
      );
      const sum =
        (isNaN(warrantyPeriod) ? 0 : warrantyPeriod) +
        (isNaN(extendedWarranty) ? 0 : extendedWarranty);

      const tempArr = item.orderedDate.split("/");
      const expiringDate = new Date(
        parseInt(tempArr[2]) + sum,
        tempArr[1],
        tempArr[0]
      );
      const currentDate = new Date();
      const bool = expiringDate - currentDate > 0;
      //expiring in next 120 days
      expiringDate.setDate(expiringDate.getDate() - 120);

      //console.log(warrantyPeriod, extendedWarranty, sum);
      return bool && expiringDate - currentDate <= 0;
    });
    this.setState({
      data: filteredList,
      originData: this.state.originData
    });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Sony</h1>
          <p>
            A range of premium camera products with plenty of features. Buy more
            and get a chance to earn a lens for free.
          </p>
        </Jumbotron>
        <ProductFilter
          onAllFilter={this.onAllFilter}
          onExpiredFilter={this.onExpiredFilter}
          onExpiringSoonFilter={this.onExpiringSoonFilter}
        />
        <br />
        <ProductList data={this.state.data} />
      </div>
    );
  }
}

export default Products;
