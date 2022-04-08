import React from "react";

const Product = ({ product }) => {
  const { id, title, image, price, category } = product;
  return (
    <div className="four wide column">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
