import React from "react";

import Item from "./Item";

function ShoppingList({
  items,
  toggleInCart,
  selectedCategory,
  setSelectedCategory,
}) {
  // console.log(toggleInCart)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="filter"
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} item={item} toggleInCart={() => toggleInCart(item.id)} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;