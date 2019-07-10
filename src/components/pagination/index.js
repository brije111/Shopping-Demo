import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.onPaginationClick = this.onPaginationClick.bind(this);
    this.onPaginationPrevClick = this.onPaginationPrevClick.bind(this);
    this.onPaginationNextClick = this.onPaginationNextClick.bind(this);
    this.getPaginationItems = this.getPaginationItems.bind(this);
  }

  onPaginationClick(e) {
    console.log(e);
    const pageNum = e.target.innerHTML;
    this.props.onPageSelected(parseInt(pageNum));
  }

  onPaginationPrevClick() {
    const pageNum = this.props.current_page;
    if (pageNum === 1) {
      alert("Prev not allowed");
    } else {
      this.props.onPageSelected(pageNum - 1);
    }
  }

  onPaginationNextClick() {
    const pageNum = this.props.current_page;
    if (pageNum === (this.items.length-2)) {
      alert("Next not allowed");
    } else {
      this.props.onPageSelected(pageNum + 1);
    }
  }

  getPaginationItems() {
    this.items = [];
    let length =
      this.props.choosenFilter === "none"
        ? this.props.originData.length
        : this.props.data.length;
    this.items.push(<Pagination.Prev key={-1} onClick={this.onPaginationPrevClick} />);
    for (
      let number = 1;
      number <= Math.ceil(length / this.props.per_page_doc);
      number++
    ) {
      this.items.push(
        <Pagination.Item
          onClick={this.onPaginationClick}
          key={number}
          active={number === this.props.current_page}
        >
          {number}
        </Pagination.Item>
      );
    }
    this.items.push(<Pagination.Next key={-2} onClick={this.onPaginationNextClick} />);
  }
  render() {
    this.getPaginationItems();
    return (
      <Pagination className="justify-content-center">
        {this.items.length === 3 || this.props.data.length===0 || this.props.choosenFilter === "all" ? (
          <div />
        ) : (
          this.items
        )}
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
    data: state.prd.data,
    originData: state.prd.originData,
    choosenFilter: state.prd.choosenFilter,
    per_page_doc: state.prd.per_page_doc,
    current_page: state.prd.current_page
  };
};

export default connect(mapStateToProps)(PaginationComponent);
