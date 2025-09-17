import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
//import DashboardPage from "./Pages/DashboardPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       {/* <Route path="/dashboard" element={<DashboardPage />} />   */}
      </Routes>
    </Router>
  );
}

export default App;