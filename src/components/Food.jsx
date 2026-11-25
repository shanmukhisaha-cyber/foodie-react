function Food(props) {
  return (
    <div className="food">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Food;