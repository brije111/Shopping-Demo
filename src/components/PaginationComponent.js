import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    for (
      let number = 1;
      number <= Math.ceil(this.props.data.length / this.props.per_page_doc);
      number++
    ) {
      items.push(
        <Pagination.Item
          onClick={this.onPaginationClick}
          key={number}
          active={number === 1}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  }
  render() {
    return (
      <Pagination className="justify-content-center">
        {this.getPaginationItems()}
      </Pagination>
    );
  }
}

PaginationComponent.propTypes = {
  onPageSelected: PropTypes.func,
  itemsLength: PropTypes.number
};

const mapStateToProps = state => {
  return {
    data: state.originData,
    per_page_doc: state.per_page_doc
  };
};

export default connect(mapStateToProps)(PaginationComponent);
