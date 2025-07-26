"use client";

import { useState } from "react";
import { Search, ScanBarcode } from "lucide-react";
import { products } from "./pos";
type Props = {
  addToCart: (product: (typeof products)[0]) => void;
  barcode: string;
  setBarcode: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function BarcodeInput({
  addToCart,
  barcode,
  setBarcode,
  setSelectedCategory,
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && barcode.trim() !== "") {
      const match = products.find((p) => p.name.toLowerCase() === barcode.toLowerCase());
      if (match) {
        addToCart(match);
      }
      setBarcode("");
    }
  };

  const changeHandler = (value: string) => {
    setBarcode(value);
    setSelectedCategory("All");
  };

  return (
    <div className="relative w-full bg-white rounded-md">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <ScanBarcode size={18} />
      </span>
      <input
        type="text"
        placeholder="Scan barcode or search..."
        value={barcode}
        onChange={(e) => changeHandler(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={18} />
      </span>
    </div>
  );
}
