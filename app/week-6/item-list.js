"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sorting logic here
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        className={`px-4 py-2 rounded-lg ${
          sortBy === "name"
            ? "bg-orange-500"
            : "bg-orange-300 hover:bg-orange-400"
        } text-white font-bold mx-2`}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className={`px-4 py-2 rounded-lg ${
          sortBy === "category"
            ? "bg-orange-500"
            : "bg-orange-300 hover:bg-orange-400"
        } text-white font-bold mx-2`}
      >
        Category
      </button>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}