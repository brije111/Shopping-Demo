import React, { Component } from "react";
import { Image, Col, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ProductItem(props) {
  const data = props.data;
  return (
    <Col sm={6} md={4} lg={3}>
      <Link
        to={{
          pathname: "/detail",
          state: { data }
        }}
      >
        <Card className="m-1">
          <div className="m-1">
            <Image src="/assets/images/img_2.png" fluid />
            <h6
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxLines: 1
              }}
            >
              {data.name}
            </h6>
            <label>Order Date : </label>
            {data.orderedDate}
            <br />
            <label>Warranty Period : </label>
            {data.warrantyPeriod}
            <br />
            <label>Extended Warranty : </label>
            {data.extendedWarranty}
          </div>
        </Card>
      </Link>
    </Col>
  );
}

export default ProductItem;
