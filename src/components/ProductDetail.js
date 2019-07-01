import React from "react";
import { Jumbotron, Image, Tabs, Tab } from "react-bootstrap";
import ProductDetailTabItem from "./ProductDetailTabItem";
//import image1 from "../images/img_2.png";

function ProductDetail(props) {
  const data = props.location.state.data;
  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Product Detail</h1>
      </Jumbotron>
      <div className="row">
        <div className="col-sm-4">
          <Image src="/assets/images/img_2.png" fluid />
        </div>
        <div className="col-sm-8">
          <h2 id="name">{data.name}</h2>
          <br />
          <label>Serial No: </label>
          <p>{data.serialNo}</p>
          <br />
          <label>Order No: </label>
          <p>{data.orderNo}</p>
          <br />
          <label>IMEI: </label>
          <p>{data.imei}</p>
          <br />
          <label>Type: </label>
          <p>{data.type}</p>
          <br />
          <label>Model No: </label>
          <p>{data.modelNo}</p>
          <br />
          <label>Order Date: </label>
          <p>{data.orderedDate}</p>
          <br />
          <label>Delivery Date: </label>
          <p>{data.orderedDate}</p>
          <br />
          <p />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Tabs defaultActiveKey="specification">
            <Tab eventKey="specification" title="Specifications" selected>
              <ProductDetailTabItem data={data.specifications} />
            </Tab>
            <Tab eventKey="feature" title="Features">
              <ProductDetailTabItem data={data.features} />
            </Tab>
            <Tab eventKey="insurance" title="Insurance">
              <ProductDetailTabItem data={data.insurance} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
