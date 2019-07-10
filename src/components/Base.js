import React, { Component } from "react";
import ProductFilter from "./filter/index";
import ProductList from "./products/index";
import { loadData } from "../helper/index";
import PaginationComponent from "./pagination/index";
import NavBarComponent from "./navbar/index";
import {
  actionFilterNone,
  actionFilterAll,
  actionFilterExpiringSoon,
  actionFilterExpired,
  actionAddData,
  actionPageData,
  actionAddToCart,
  actionDeleteCart
} from "../actions";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.onNoFilter = this.onNoFilter.bind(this);
    this.onAllFilter = this.onAllFilter.bind(this);
    this.onExpiredFilter = this.onExpiredFilter.bind(this);
    this.onExpiringSoonFilter = this.onExpiringSoonFilter.bind(this);
    this.onPageSelected = this.onPageSelected.bind(this);
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
  }

  componentDidMount() {
    //localStorage.removeItem('cart');
    loadData(data => {
      this.props.actionAddData(data);
    });
  }

  onNoFilter() {
    this.props.actionFilterNone();
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
    if(this.props.cart.hasOwnProperty(prodId)){
      this.props.actionDeleteCart(prodId);
    }else{
      this.props.actionAddToCart(prodId);
    }
  }

  render() {
    return (
      <div className="App">
        <NavBarComponent />
        <ProductFilter
          onNoFilter={this.onNoFilter}
          onAllFilter={this.onAllFilter}
          onExpiredFilter={this.onExpiredFilter}
          onExpiringSoonFilter={this.onExpiringSoonFilter}
        />
        <br />
        <ProductList onAddToCartClick={this.onAddToCartClick} />
        <br />
        <PaginationComponent onPageSelected={this.onPageSelected} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.prd.data,
    originData: state.prd.originData,
    current_page: state.prd.current_page,
    per_page_doc: state.prd.per_page_doc,
    cart:state.crt.cart
  };
};

const mapDispatchToProps = {
  actionAddData,
  actionFilterNone,
  actionFilterAll,
  actionFilterExpired,
  actionFilterExpiringSoon,
  actionPageData,
  actionAddToCart,
  actionDeleteCart
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
