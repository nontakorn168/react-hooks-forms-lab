import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    if (!itemName.trim()) return; // Prevent submission if no name is provided
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Call the callback with the new item
    setItemName(""); // Reset the input fields
    setItemCategory("Produce");
    console.log(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="itemName">Name:</label>
      <input
        type="text"
        id="itemName"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item name"
      />
      
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      
      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
