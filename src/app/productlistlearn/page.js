"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h3 key={item.id}>Name: {item.title}</h3>
      ))}
    </div>
  );
}
