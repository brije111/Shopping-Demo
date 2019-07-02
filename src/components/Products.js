import React, { Component } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { Jumbotron } from "react-bootstrap";
import {
  onExpiredFilterHelper,
  onExpiringSoonFilterHelper,
  getPageData,
  loadData
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
    loadData((data)=>{
      this.setState({
        data: getPageData(data),
        originData: data
      });
    })
  }

  onAllFilter() {
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
      <div className="App">
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
        <PaginationComponent style={{textAlign: 'center'}}
          onPageSelected={this.onPageSelected}
          items={this.state.originData}
        />
      </div>
    );
  }
}

export default Products;
