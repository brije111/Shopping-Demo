import React, { Component } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { loadData } from "../helper/Producthelper";
import PaginationComponent from "./PaginationComponent";
import NavBarComponent from "./NavBarComponent";
import {
  actionFilterAll,
  actionFilterExpiringSoon,
  actionFilterExpired,
  actionAddData,
  actionPageData,
  actionAddToCart
} from "../actions";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.onAllFilter = this.onAllFilter.bind(this);
    this.onExpiredFilter = this.onExpiredFilter.bind(this);
    this.onExpiringSoonFilter = this.onExpiringSoonFilter.bind(this);
    this.onPageSelected = this.onPageSelected.bind(this);
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
  }

  componentDidMount() {
    loadData(data => {
      this.props.actionAddData(data);
    });
  }

  onAllFilter() {
    this.props.actionFilterAll();
  }

  onExpiredFilter() {
    this.props.actionFilterExpired();
  }

  onExpiringSoonFilter() {
    this.props.actionFilterExpiringSoon();
  }

  onPageSelected(pageNum) {
    this.props.actionPageData(pageNum);
  }

  onAddToCartClick(prodId) {
    this.props.actionAddToCart(prodId);
  }

  render() {
    return (
      <div className="App">
        <NavBarComponent />
        <ProductFilter
          onAllFilter={this.onAllFilter}
          onExpiredFilter={this.onExpiredFilter}
          onExpiringSoonFilter={this.onExpiringSoonFilter}
        />
        <br />
        <ProductList onAddToCartClick={this.onAddToCartClick} />
        <br />
        <PaginationComponent
          style={{ textAlign: "center" }}
          onPageSelected={this.onPageSelected}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data,
    originData: state.originData,
    current_page: state.current_page,
    per_page_doc: state.per_page_doc
  };
};

const mapDispatchToProps = {
  actionAddData,
  actionFilterAll,
  actionFilterExpired,
  actionFilterExpiringSoon,
  actionPageData,
  actionAddToCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
