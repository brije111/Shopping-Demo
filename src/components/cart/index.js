import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { ListGroup, Jumbotron } from "react-bootstrap";
import {
  actionIncrementCart,
  actionDecrementCart,
  actionDeleteCart
} from "../../actions";

class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onIncrement(prodId) {
    this.props.actionIncrementCart(prodId);
  }
  onDecrement(prodId) {
    this.props.actionDecrementCart(prodId);
  }
  onDelete(prodId) {
    this.props.actionDeleteCart(prodId);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Cart</h1>
        </Jumbotron>
        <ListGroup>
          {Object.keys(this.props.cart).map(item => (
            <ListGroup.Item>
              <CartItem
                key={item}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
                onDelete={this.onDelete}
                data={this.props.originData.find(od => od.serialNo === item)}
                count={this.props.cart[item]}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

CartComponent.propTypes = {};

const mapStateToProps = state => {
  return {
    cart: state.crt.cart,
    originData: state.prd.originData
  };
};

const mapDispatchToProps = {
  actionIncrementCart,
  actionDecrementCart,
  actionDeleteCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);
