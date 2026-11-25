
import { useState } from "react";
import FoodCard from "./FoodCard";

function FoodMenu({ foods, addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = foods.filter((food) => {
    return (
      food.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || food.category === category)
    );
  });

  return (
    <section className="menu" id="menu">
      <h2>Our Delicious Food Menu</h2>

      <input
        className="search"
        type="text"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        {["All", "Biryani", "Pizza", "Burger", "Chicken"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="food-container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No Food Items Found!</p>
        )}
      </div>
    </section>
  );
}

export default FoodMenu;
