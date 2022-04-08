import React, { useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/Actions/product-actions";

const ProuctList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => console.log(error));
      dispatch(setProducts(response.data));
    };
    fetchProducts();
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
