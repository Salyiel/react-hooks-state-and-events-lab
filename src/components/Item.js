import React from "react";

function Item({ item, toggleInCart }) {
  const {category, inCart, name} = item;

  // console.log(toggleInCart)

  return (
    <li className={inCart ? "in-cart": ''}>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button onClick={toggleInCart} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;