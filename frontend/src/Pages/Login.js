import React, { useState } from 'react';
import './Login.css';

// Note: You'll need to add these images to your project
import logo from '../Images/logo.png';
import googleIcon from '../Images/2.jpeg';
import backgroundImage from '../Images/1.jpeg';

const Login = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempted');
  };

  // Typing animation style without cursor
  const typingAnimation = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: 'typing 3.5s steps(9, end)'
  };

  return (
    <div className="login-container">
      {/* Left side - Brand section with background image */}
      <div 
        className="brand-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="brand-overlay">
          <div className="brand-content">
            <div className="selected-works">Selected Works</div>
            <div className="sign-up-join">
              <span className="sign-up" onClick={onSwitchToSignup}>Sign Up</span>
              <span className="join-us">Join Us</span>
            </div>
            <div className="brand-logo">
              <img src={logo} alt="USOCIAL Logo" />
            </div>
            <div className="brand-name" style={typingAnimation}>Quick Cash</div>
          </div>
          <div className="footer-left">
            <div className="andrew-us">Andrew.us</div>
            <div className="us-illustration">U.S. Illustration</div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="login-section">
        <div className="login-content">
          <h2 className="welcome-heading">Hi</h2>
          <p className="welcome-text">Welcome to QuickCash</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Enter Your Email Here</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="login-button">Login</button>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
              <img src={googleIcon} alt="Google icon" className="google-icon" />
              Login with Google
            </button>
            
            <div className="signup-prompt">
              Don't have an account? <span className="signup-link" onClick={onSwitchToSignup}>Sign up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;