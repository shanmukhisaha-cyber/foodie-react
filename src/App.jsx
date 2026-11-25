
import { useState } from "react";
import "./App.css";

import Auth from "./components/Auth";
import Header from "./components/Header";
import Home from "./components/Home";
import FoodMenu from "./components/FoodMenu";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 180,
      category: "Biryani",
      description: "Delicious Chicken Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500"
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      category: "Pizza",
      description: "Cheesy Italian Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },
    {
      id: 3,
      name: "Burger",
      price: 120,
      category: "Burger",
      description: "Tasty Cheese Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
      id: 4,
      name: "Fried Chicken",
      price: 200,
      category: "Chicken",
      description: "Crispy Fried Chicken",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500"
    },
    {
      id: 5,
      name: "Veg Biryani",
      price: 150,
      category: "Biryani",
      description: "Fresh Vegetable Biryani",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500"
    },
    {
      id: 6,
      name: "Cheese Pizza",
      price: 280,
      category: "Pizza",
      description: "Extra Cheese Pizza",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500"
    }
  ];

  // Login Success
  function handleLogin(name) {
    setUser(name);
    setPage("home");
  }

  // Add Food To Cart
  function addToCart(food) {
    const existing = cart.find(
      (item) => item.id === food.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  }

  // Increase / Decrease Quantity
  function changeQuantity(id, amount) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Cart Count
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Login Page
  if (page === "login") {
    return <Auth onSuccess={handleLogin} />;
  }

  // Home Page
  if (page === "home") {
    return (
      <div>
        <Header
          user={user}
          cartCount={cartCount}
          onLogout={() => {
            setUser("");
            setPage("login");
          }}
        />

        <Home />

        <FoodMenu
          foods={foods}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          changeQuantity={changeQuantity}
          onCheckout={() => setPage("payment")}
        />

        <Footer />
      </div>
    );
  }

  // Payment Page
  if (page === "payment") {
    return (
      <Payment
        total={total}
        onBack={() => setPage("home")}
        onOrder={(method) => {
          setPaymentMethod(method);
          setCart([]);
          setPage("success");
        }}
      />
    );
  }

  // Order Confirmation
  if (page === "success") {
    return (
      <div className="success-page">
        <h1>🎉 Order Placed Successfully!</h1>

        <h2>Thank You, {user}!</h2>

        <p>Your food is on its way.</p>

        <p>Payment Method: {paymentMethod}</p>

        <button onClick={() => setPage("home")}>
          Continue Shopping
        </button>

        <button onClick={() => {
          setUser("");
          setPage("login");
        }}>
          Logout
        </button>
      </div>
    );
  }

  return null;
}

export default App;
