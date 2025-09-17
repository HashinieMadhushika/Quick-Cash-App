// App.js
import React, { useState } from 'react';
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/Signup';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="App">
      {isLogin ? (
        <Login onSwitchToSignup={switchToSignup} />
      ) : (
        <Signup onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;