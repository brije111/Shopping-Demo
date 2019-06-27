import React, { Component } from "react";
import { Image, Col } from "react-bootstrap";
import image1 from "../images/img_2.png";

class ProductItem extends Component {
  state = {};

  render() {
    return (
      <Col sm={4}>
        <div className="m-2">
          <Image src={image1} fluid />
          <h5>{this.props.data.name}</h5>
          <p>{this.props.data.path}<br />
          <label>Order Date : </label>{this.props.data.orderedDate}<br />
          <label>Warranty Period : </label>{this.props.data.warrantyPeriod}<br />
          <label>Extended Warranty : </label>{this.props.data.extendedWarranty}
          </p>
        </div>
      </Col>
    );
  }
}

export default ProductItem;
