import React, { Component } from "react";
import { Image, Col, Card, Button } from "react-bootstrap";
import {Link } from "react-router-dom";

function ProductItem(props) {
  const data = props.data;
  return (
    <Col sm={6} md={4} lg={3}>
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
            <br />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={{
              pathname: "/detail",
              state: { data }
            }}
          >
            <Button className='m-1' variant="secondary">View Detail</Button>
          </Link>
          <Button className='m-1'
            variant="primary"
            onClick={() => props.onAddToCartClick(data.serialNo)}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </Col>
  );
}

export default ProductItem;
