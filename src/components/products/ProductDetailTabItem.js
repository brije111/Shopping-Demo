import React from "react";

function ProductDetailTabItem(props) {
  const data = props.data;
  return (
    <div>
      {Array.isArray(data)
        ? data.map(item => <p>{item}</p>)
        : Object.keys(data).map(key => (
            <div>
              <label>{key} :</label>
              <p>{data[key]}</p>
              <br />
            </div>
          ))}
    </div>
  );
}

export default ProductDetailTabItem;
