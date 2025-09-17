import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; 
import logo from "../Images/logo.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="QuickCash Logo" className="logo" />
      </div>

      <h1 className="welcome-title">Welcome to QuickCash</h1>
      <p className="welcome-subtitle">
        Split expenses with friends easily. Create groups, add expenses, and let
        QuickCash do the math for you!
      </p>

      <div className="button-group">
        <button onClick={() => navigate("/login")} className="btn btn-login">
          Login
        </button>
        <button onClick={() => navigate("/signup")} className="btn btn-signup">
          Sign Up
        </button>
      </div>
    </div>
  );
}
