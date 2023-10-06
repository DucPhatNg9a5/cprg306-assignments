"use client";

import Item from "./item";
import Items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  sortBy === "name"
    ? Items.sort((a, b) => a.name.localeCompare(b.name))
    : Items.sort((a, b) => a.category.localeCompare(b.category));
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
      {Items.map((i) => (
        <Item key={i.id} item={i} name={i.name} />
      ))}
    </>
  );
}
