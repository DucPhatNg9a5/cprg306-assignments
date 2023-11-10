"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";


export default function main() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  async function loadItems() {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    setItems(prevItems => [...prevItems, { id, ...item }]);
  }

  async function handleDeleteItem(itemId) {
    await deleteItem(user.uid, itemId);
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }

  const handleItemSelect = (item) => {
    const cleanedName = item.split(',')[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return <Link href="/week8">Please log in to view the shopping list.</Link>
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

 
  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}  onDeleteItem={handleDeleteItem}/>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
