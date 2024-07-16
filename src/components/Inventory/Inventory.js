import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function Inventory() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, pricePerUnit: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsCollectionRef = collection(db, 'inventory');

  const getItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDocs(itemsCollectionRef);
      const fetchedItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log('Fetched items:', fetchedItems);
      setItems(fetchedItems);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching items:', err);
    }
    setLoading(false);
  };

  const createItem = async () => {
    try {
      const totalPrice = newItem.quantity * newItem.pricePerUnit;
      await addDoc(itemsCollectionRef, { ...newItem, totalPrice });
      getItems();
    } catch (err) {
      setError(err.message);
      console.error('Error creating item:', err);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      const itemDoc = doc(db, 'inventory', id);
      updatedItem.totalPrice = updatedItem.quantity * updatedItem.pricePerUnit;
      await updateDoc(itemDoc, updatedItem);
      getItems();
    } catch (err) {
      setError(err.message);
      console.error('Error updating item:', err);
    }
  };

  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, 'inventory', id);
      await deleteDoc(itemDoc);
      getItems();
    } catch (err) {
      setError(err.message);
      console.error('Error deleting item:', err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h2>Inventory Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Price per Unit"
            value={newItem.pricePerUnit}
            onChange={(e) => setNewItem({ ...newItem, pricePerUnit: Number(e.target.value) })}
          />
          <button onClick={createItem}>Add Item</button>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, { ...item, name: e.target.value })}
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, { ...item, quantity: Number(e.target.value) })}
                />
                <input
                  type="number"
                  value={item.pricePerUnit}
                  onChange={(e) => updateItem(item.id, { ...item, pricePerUnit: Number(e.target.value) })}
                />
                <p>Total Price: {item.totalPrice}</p>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Inventory;