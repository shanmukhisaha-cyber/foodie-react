
function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <h3>₹{food.price}</h3>

      <button onClick={() => addToCart(food)}>
        Add To Cart
      </button>
    </div>
  );
}

export default FoodCard;
