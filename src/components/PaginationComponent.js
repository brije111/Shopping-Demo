import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.onPaginationClick = this.onPaginationClick.bind(this);
    this.getPaginationItems = this.getPaginationItems.bind(this);
  }

  onPaginationClick(e) {
    console.log(e.target.innerHTML);
    const pageNum = e.target.innerHTML;
    this.props.onPageSelected(pageNum);
  }
  getPaginationItems() {
    let items = [];
    let number = 1;
    do {
      items.push(
        <Pagination.Item
          onClick={this.onPaginationClick}
          key={number}
          active={number === 1}
        >
          {number}
        </Pagination.Item>
      );
      number++;
    } while (items.length * 9 < this.props.items.length);
    return items;
  }
  render() {
    return <Pagination>{this.getPaginationItems()}</Pagination>;
  }
}

export default PaginationComponent;
