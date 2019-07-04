import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

const NavBarComponent = props => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" sticky="top">
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
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

NavBarComponent.propTypes = {};

export default NavBarComponent;
