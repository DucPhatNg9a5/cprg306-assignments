"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <>
      <label>Sort By: </label>
      <button
        className={`p-1 m-2 w-28 ${
          sortBy === "name" ? "bg-green-500" : "bg-green-800"
        }`}
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        className={`p-1 m-2 w-28 ${
          sortBy === "category" ? "bg-green-500" : "bg-green-800"
        }`}
        onClick={() => setSortBy("category")}
      >
        Category
      </button>
      {sortedItems.map((i) => (
        <Item key={i.id} name={i.name} quantity={i.quantity} category={i.category} onSelect={onItemSelect}/>
      ))}
    </>
  );
}
