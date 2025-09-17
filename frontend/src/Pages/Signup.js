import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Using the same CSS file

// Note: You'll need to add these images to your project
import logo from '../Images/3.jpeg';
import googleIcon from '../Images/2.jpeg';
import backgroundImage from '../Images/1.jpeg';

const Signup = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phoneNumber: ''
  });

   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempted with:', formData);
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log('Google signup attempted');
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
              <span className="sign-up">Sign Up</span>
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

      {/* Right side - Signup form */}
      <div className="login-section">
        <div className="login-content">
          <h2 className="welcome-heading">Create Account</h2>
          <p className="welcome-text">Join QuickCash Today</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <button type="submit" className="login-button">Create Account</button>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <button type="button" className="google-login-button" onClick={handleGoogleSignup}>
              <img src={googleIcon} alt="Google icon" className="google-icon" />
              Sign up with Google
            </button>
            
            <div className="signup-prompt">
              Already have an account? <span className="signup-link" onClick={onSwitchToLogin}>Login</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;