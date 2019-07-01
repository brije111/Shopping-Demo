import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";

function ProductList(props) {
  return (
    <Container>
      <Row>
        {props.data.map(prod => (
          <ProductItem key={prod.serialNo} data={prod} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
