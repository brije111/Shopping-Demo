import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProductList(props) {
  return (
    <Container>
      <Row>
        {props.data.map(prod => (
          <ProductItem onAddToCartClick={props.onAddToCartClick} key={prod.serialNo} data={prod} />
        ))}
      </Row>
    </Container>
  );
}

ProductList.propTypes = {
  data: PropTypes.array
};

const mapStateToProps = state => {
  return {
    data: state.prd.data
  };
};

export default connect(mapStateToProps)(ProductList);
