import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function ProductFilter(props){
    return (
      <div>
        <DropdownButton className="m-2" id="dropdown-basic-button" title="Product Filter">
          <Dropdown.Item onClick={props.onAllFilter}>all products</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiredFilter}>expired warranty</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiringSoonFilter}>expiring soon</Dropdown.Item>
        </DropdownButton>
      </div>
    );
}

export default ProductFilter;
