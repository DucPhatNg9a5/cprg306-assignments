import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(itemsRef);

  const items = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
    const itemRef = doc(db, `users/${userId}/items/${itemId}`);
    await deleteDoc(itemRef);
  }