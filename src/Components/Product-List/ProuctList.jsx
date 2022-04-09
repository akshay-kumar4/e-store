import React, { useEffect } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Actions/product-actions";

const ProuctList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProuctList;
