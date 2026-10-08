import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function Login({ onRegister }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    dispatch(
      login({
        name: "College Student",
        email: email,
      })
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-background-circle circle-one"></div>
      <div className="auth-background-circle circle-two"></div>

      <div className="auth-card">

        <div className="auth-icon">
          🎓
        </div>

        <h1>College Events</h1>

        <p className="auth-subtitle">
          Event & Ticket Management System
        </p>

        <div className="auth-heading">
          <h2>Welcome Back!</h2>
          <p>Login to discover and book college events.</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span>✉️</span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span>🔒</span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Don't have an account?
          <button type="button" onClick={onRegister}>
            Create Account
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;