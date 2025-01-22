import React, { use, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemsData from "../data/items";



function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState(itemsData);
  
  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);  }
  
  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    // Check if the item name matches the search text
    const matchesSearchText = item.name.toLowerCase().includes(searchText.toLowerCase());
    
    // Check if the category matches or if "All" is selected
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    // Include the item only if both conditions are met
    return matchesSearchText && matchesCategory;
  });
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter searchText={searchText} onSearchChange={setSearchText} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      
    </div>
  );
}

export default ShoppingList;
