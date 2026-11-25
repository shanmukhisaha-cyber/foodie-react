
function Header({ user, cartCount, onLogout }) {
  return (
    <header className="header">
      <h1>🍔 Foodie</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Food Menu</a>
        <a href="#cart">Cart ({cartCount})</a>
      </nav>

      <div>
        <span>Welcome, {user}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;