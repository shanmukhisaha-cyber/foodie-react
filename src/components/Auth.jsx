
import { useState } from "react";

function Auth({ onSuccess }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (isSignup) {
      alert("Signup Successful! Please Login.");
      setIsSignup(false);
      setPassword("");
    } else {
      alert("Login Successful!");
      onSuccess(name || email.split("@")[0]);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h1>🍔 Foodie</h1>
        <h2>{isSignup ? "Create Account" : "Login"}</h2>
        <p>Welcome to Food Delivery System</p>

        {isSignup && (
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p>
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>

        <button
          type="button"
          className="switch-btn"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login Here" : "Create New Account"}
        </button>
      </form>
    </div>
  );
}

export default Auth;