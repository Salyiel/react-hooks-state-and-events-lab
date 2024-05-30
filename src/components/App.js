import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  const [toggleMode, setToggleMode] = useState(false)
  const [items, setItems] = useState(itemData)
  const [selectedCategory, setSelectedCategory] = useState("All")



  // Original to swap: const appClass = false ? "App dark" : "App light"
  const toggleDarkMode = () => {
    setToggleMode(!toggleMode)
  }

  function toggleInCart(id) {
    const newItems = [...items]
      setItems(newItems.map(item =>
        id === item.id ? {...item, inCart: !item.inCart} : item
        )
      );
  }
  return (
    <div className={toggleMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {toggleMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList
      items={items.filter(item =>
        selectedCategory === "All" || item.category === selectedCategory
      )}
      toggleInCart={toggleInCart}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />

      <section>
        Items in cart: {items.filter(item => item.inCart).length}
      </section>
    </div>
  );
}

export default App;