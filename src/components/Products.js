import React, { Component } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import axios from "axios";
import { Jumbotron } from "react-bootstrap";
import {
  getAllProductHelper,
  onExpiredFilterHelper,
  onExpiringSoonFilterHelper,
  getPageData
} from "../helper/Producthelper";
import PaginationComponent from "./PaginationComponent";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      originData: [],
      current_page: 1,
      per_page_doc: 9
    };
    this.onAllFilter = this.onAllFilter.bind(this);
    this.onExpiredFilter = this.onExpiredFilter.bind(this);
    this.onExpiringSoonFilter = this.onExpiringSoonFilter.bind(this);
    this.onPageSelected = this.onPageSelected.bind(this);
  }

  componentDidMount() {
    axios
      .get("assets/raw/products.json")
      .then(response => {
        console.log(response.data);
        const _data = getAllProductHelper(response.data);
        this.setState({
          data: getPageData(_data),
          originData: _data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onAllFilter(e) {
    this.setState({
      data: this.state.originData,
      originData: this.state.originData
    });
  }

  onExpiredFilter() {
    this.setState({
      data: onExpiredFilterHelper(this.state.originData),
      originData: this.state.originData
    });
  }

  onExpiringSoonFilter() {
    this.setState({
      data: onExpiringSoonFilterHelper(this.state.originData),
      originData: this.state.originData
    });
  }

  onPageSelected(pageNum) {
    this.setState({
      data: getPageData(
        this.state.originData,
        pageNum,
        this.state.per_page_doc
      ),
      originData: this.state.originData,
      current_page: pageNum,
      per_page_doc: this.state.per_page_doc
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
        <br />
        <PaginationComponent
          onPageSelected={this.onPageSelected}
          items={this.state.originData}
        />
      </div>
    );
  }
}

export default Products;
