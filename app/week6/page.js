"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";

import { useState } from "react";

export default function main() {
  const [items, setItems] = useState(itemData);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <main className="bg-slate-950">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>
    </main>
  );
}