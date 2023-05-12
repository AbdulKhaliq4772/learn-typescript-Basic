import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: "iphone",
      price: 3000,
    },
    {
      id: 2,
      title: "macbook",
      price: 4000,
    },
  ]);

  function handleAddToCart(id: number) {
    console.log("clicked", id);
  }

  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
