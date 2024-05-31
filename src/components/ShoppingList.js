import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function ShoppingList({ items, toggleInCart, selectedCategory, setSelectedCategory }) {
  return (
    <div className="shopping-list">
      <div className="filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="filter"
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="items">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleInCart={() => toggleInCart(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      inCart: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleInCart: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired
};

export default ShoppingList;
