import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import PropTypes from 'prop-types';

function ProductFilter(props){
    return (
      <div style={{marginTop:60}}>
        <DropdownButton className="m-2" id="dropdown-basic-button" title="Product Filter">
          <Dropdown.Item onClick={props.onNoFilter}>No Filter</Dropdown.Item>
          <Dropdown.Item onClick={props.onAllFilter}>All Products</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiredFilter}>Expired Warranty</Dropdown.Item>
          <Dropdown.Item onClick={props.onExpiringSoonFilter}>Expiring Soon</Dropdown.Item>
        </DropdownButton>
      </div>
    );
}

ProductFilter.propTypes = {
  onAllFilter:PropTypes.func, 
  onExpiredFilter:PropTypes.func, 
  onExpiringSoonFilter:PropTypes.func
}

export default ProductFilter;
