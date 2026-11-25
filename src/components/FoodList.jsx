import Food from "./Food";

function FoodList() {
  return (
    <div id="food">
      <h1>Our Food Menu</h1>

      <div className="food-list">
        <Food
          name="Chicken Biryani"
          price="180"
          image="https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400"
        />

        <Food
          name="Pizza"
          price="250"
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
        />

        <Food
          name="Burger"
          price="120"
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
        />
      </div>
    </div>
  );
}

export default FoodList;