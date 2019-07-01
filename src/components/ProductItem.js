import React, { Component } from "react";
import { Image, Col, Card } from "react-bootstrap";
import image1 from "../images/img_2.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

class ProductItem extends Component {
  render() {
    return (
      <Col sm={4}>
        <Link to='/detail'>
        <Card className="m-2">
          <div className="m-2">
            <Image src={image1} fluid />
            <h6>{this.props.data.name}</h6>
            <label>Order Date : </label>
            {this.props.data.orderedDate}
            <br />
            <label>Warranty Period : </label>
            {this.props.data.warrantyPeriod}
            <br />
            <label>Extended Warranty : </label>
            {this.props.data.extendedWarranty}
          </div>
        </Card>
        </Link>
      </Col>

    );
  }
}

export default ProductItem;
