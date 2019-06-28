import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";

class ProductList extends Component {
  state = {};

  render() {
    console.log(this.props.data);
    return (
      <Container>
        <Row>
          {this.props.data.map(prod => (
            <ProductItem key={prod.serialNo} data={prod} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
