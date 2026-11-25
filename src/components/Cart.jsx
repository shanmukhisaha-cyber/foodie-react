
function Cart({ cart, changeQuantity, onCheckout }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart" id="cart">
      <h2>🛒 My Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your Cart Is Empty!</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <button onClick={() => changeQuantity(item.id, -1)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => changeQuantity(item.id, 1)}>
              +
            </button>

            <strong>
              ₹{item.price * item.quantity}
            </strong>
          </div>
        ))
      )}

      <h2>Total Amount: ₹{total}</h2>

      <button
        disabled={cart.length === 0}
        onClick={onCheckout}
      >
        Proceed To Payment
      </button>
    </section>
  );
}

export default Cart;
