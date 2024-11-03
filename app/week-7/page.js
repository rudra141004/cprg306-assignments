"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="min-h-screen p-8 bg-black">
      <h1 className="text-4xl font-bold mb-6 text-left">Shopping List</h1>

      <section className="mb-8">
        <NewItem onAddItem={handleAddItem} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-left">Items</h2>
        <ItemList items={items} />
      </section>
    </main>
  );
}
