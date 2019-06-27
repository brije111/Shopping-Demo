import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class ProductFilter extends Component {
  state = {};
  render() {
    return (
      <div>
        <DropdownButton className="m-2" id="dropdown-basic-button" title="Product Filter">
          <Dropdown.Item onClick={this.props.onAllFilter}>all products</Dropdown.Item>
          <Dropdown.Item onClick={this.props.onExpiredFilter}>expired warranty</Dropdown.Item>
          <Dropdown.Item onClick={this.props.onExpiringSoonFilter}>expiring soon</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default ProductFilter;
