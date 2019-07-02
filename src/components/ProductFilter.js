import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function ProductFilter(props){
    return (
      <div>
        <DropdownButton className="m-2" id="dropdown-basic-button" title="Product Filter">
          <Dropdown.Item onClick={props.onAllFilter}>All Products</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiredFilter}>Expired Warranty</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiringSoonFilter}>Expiring Soon</Dropdown.Item>
        </DropdownButton>
      </div>
    );
}

export default ProductFilter;
