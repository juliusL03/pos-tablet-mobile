"use client";

import React, { useState } from "react";
import BarcodeInput from "./BarcodeInput";
import Categories from "./Categories";
import Products from "./Products";
import Summary from "./Summary";
import Container from "./Container";
import BoxRounded from "./BoxRounded";

export const products = [
  { id: 1, name: "Bananas", price: 1.0, category: "Fruits & Vegetables" },
  { id: 2, name: "Apples", price: 0.5, category: "Fruits & Vegetables" },
  { id: 3, name: "Lettuce", price: 1.5, category: "Fruits & Vegetables" },
  { id: 4, name: "Croissant", price: 1.8, category: "Bakery" },
  { id: 5, name: "Milk", price: 2.0, category: "Dairy" },
  { id: 6, name: "Cheese", price: 4.0, category: "Dairy" },
];

const categories = ["All", "Fruits & Vegetables", "Bakery", "Dairy"];

export default function POS() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [barcode, setBarcode] = useState("");

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(barcode.toLowerCase())
  );

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <Container>
      <BoxRounded>
        <BarcodeInput
          addToCart={addToCart}
          barcode={barcode}
          setBarcode={setBarcode}
          setSelectedCategory={setSelectedCategory}
        />
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Products
          products={filteredProducts}
          selectedCategory={selectedCategory}
          addToCart={addToCart}
        />
      </BoxRounded>
      <Summary
        cart={cart}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />
    </Container>
  );
}
