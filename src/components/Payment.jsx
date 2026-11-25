
import { useState } from "react";

function Payment({ total, onBack, onOrder }) {
  const [method, setMethod] = useState("UPI");

  function handlePayment() {
    alert("Order Placed Successfully!");
    onOrder(method);
  }

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h1>Payment Options</h1>

        <h2>Total Amount: ₹{total}</h2>

        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={method === "UPI"}
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI Payment
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            checked={method === "Card"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Debit / Credit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={method === "COD"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash On Delivery
        </label>

        <h3>Selected: {method}</h3>

        <button onClick={onBack}>Back To Cart</button>
        <button onClick={handlePayment}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Payment;
