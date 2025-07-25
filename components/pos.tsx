"use client";

import React, { useState } from "react";
import BarcodeInput from "./BarcodeInput";

export const products = [
  { id: 1, name: "Bananas", price: 1.0, category: "Fruits & Vegetables" },
  { id: 2, name: "Apples", price: 0.5, category: "Fruits & Vegetables" },
  { id: 3, name: "Lettuce", price: 1.5, category: "Fruits & Vegetables" },
  { id: 4, name: "Croissant", price: 1.8, category: "Bakery" },
  { id: 5, name: "Milk", price: 2.0, category: "Dairy" },
  { id: 6, name: "Cheese", price: 4.0, category: "Dairy" },
];

const categories = ["Fruits & Vegetables", "Bakery", "Dairy"];

export default function POS() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Fruits & Vegetables");
  const [barcodeInput, setBarcodeInput] = useState<string>("");

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

  const handleScan = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const match = products.find((p) => p.name.toLowerCase() === barcodeInput.toLowerCase());
      if (match) {
        addToCart(match);
      }
      setBarcodeInput("");
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row h-screen gap-2 px-4">
      <div className="md:w-2/3 flex flex-col md:flex-col my-4 gap-4">
        {/* barcode & search */}
        <BarcodeInput addToCart={addToCart} />
        {/* Categories */}
        <div className="flex md:flex-row gap-2 overflow-x-auto md:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`p-2 rounded-md font-semibold text-black ${
                selectedCategory === cat ? "bg-blue-600" : "bg-gray-400"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products
            .filter((p) => p.category === selectedCategory)
            .map((product) => (
              <button
                key={product.id}
                className="p-4 border rounded-lg text-center shadow hover:bg-blue-50"
                onClick={() => addToCart(product)}
              >
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
              </button>
            ))}
        </div>
      </div>
      {/* Order Summary */}
      <div className="md:w-1/3 p-4 bg-gray-100/90 rounded-md my-4">
        <h2 className="text-lg font-bold mb-4">Order</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-2"
          >
            <span>
              {item.name} x{item.qty}
            </span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="bg-yellow-400 p-2 rounded">Cash</button>
          <button className="bg-blue-500 text-black p-2 rounded">Card</button>
          <button className="bg-gray-300 col-span-2 p-2 rounded">Print Receipt</button>
        </div>
      </div>
    </div>
  );
}
