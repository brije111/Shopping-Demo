import React from "react";
import PropTypes from "prop-types";
import { Image, Button } from "react-bootstrap";
import { connect } from "react-redux";

const CartItem = props => {
  console.log(props.cart);
  
  return (
    <div className="row">
      <div className="col-sm-3">
        <Image style={{height:200}} src={props.data.imageSrc} fluid />
      </div>
      <div className="col-sm-6">
        <h3>{props.data.name}</h3>
        <p>
          <span style={{ color: "grey" }}>Model No : </span>
          {props.data.modelNo}
        </p>
        <p>
          <span style={{ color: "grey" }}>Warranty : </span>
          {props.data.warrantyPeriod}
        </p>
      </div>
      <div className="col-sm-3">
        <div className="float-right align-items-center">
          <h2>{"$ "+(props.data.price)}</h2>
          <div className="m-2">
            <Button onClick={()=>props.onDecrement(props.data.serialNo)} className="m-2" variant="primary">
              -
            </Button>
            <label>{props.cart[props.data.serialNo]}</label>
            <Button onClick={()=>props.onIncrement(props.data.serialNo)} className="m-2" variant="primary">
              +
            </Button>
          </div>
          <Button onClick={()=>props.onDelete(props.data.serialNo)} className="m-2" variant="secondary">
            DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

const mapStateToProps = state => {
  return {
    cart: state.crt.cart
  };
};

export default connect(mapStateToProps)(CartItem);
