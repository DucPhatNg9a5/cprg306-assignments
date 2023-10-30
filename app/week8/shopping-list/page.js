"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";

import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";


export default function main() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  const handleItemSelect = (item) => {
    const cleanedName = item.split(',')[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return <Link href="/week8">Please log in to view the shopping list.</Link>
  }

 
  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
