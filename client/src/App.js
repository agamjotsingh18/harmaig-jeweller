// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; // Import the Login page
import Dashboard from "./components/Dashboard";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Main page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<SignUp />} /> {/* Login page */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
