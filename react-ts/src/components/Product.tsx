import React from "react";
import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCart(id: number): void;
}

const Product = ({ product, handleAddToCart }: ProductProps) => {
  return (
    <div>
      <div>{product.title}</div>
      <button onClick={() => handleAddToCart(product.id)}>add to cart</button>
    </div>
  );
};

export default Product;
