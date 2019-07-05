import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const NavBarComponent = props => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/images/s_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
          />
          {"SOMY"}
        </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
        <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/cart"
          >
      <Nav.Link href="#deets">
        <i className="fa fa-cart-plus" aria-hidden="true"><span className="m-2">Cart</span></i>
        <Badge variant="secondary">{Object.keys(props.cart).length}</Badge>
        </Nav.Link>
        </Link>
    </Nav>
      </Navbar>
    </div>
  );
};

NavBarComponent.propTypes = {};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(NavBarComponent);
