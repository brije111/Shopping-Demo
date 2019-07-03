import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";
import PropTypes from 'prop-types';

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

ProductList.propTypes = {
  data:PropTypes.array
}

export default ProductList;
