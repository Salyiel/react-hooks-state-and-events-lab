import React, { useState } from "react";
import PropTypes from "prop-types";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleInCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={`item ${inCart ? "in-cart" : ""}`}>
      <span className="item-name">{name}</span>
      <span className="item-category">{category}</span>
      <button onClick={toggleInCart} className="add-to-cart">
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Item;
