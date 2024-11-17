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
import ProductList from "./pages/ProductList";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Stores from "./pages/Stores";
// import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Main page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          {/* <Route path="/auth" element={<Auth />} /> Login page */}

          <Route path="/signup" element={<SignUp />} /> {/* Login page */}
          <Route path="/wishlist" Component={Wishlist} />
          <Route path="/cart" Component={Cart} />
          <Route path="/orders" Component={Orders} />
          <Route path="/stores" Component={Stores} />
          <Route path="/forgot-password" Component={ForgotPassword} />
          <Route path="/reset-password/:token" Component={ResetPassword} />

          <Route exact path="/products" Component={ProductList} />
          <Route path="/product-detail/:productId" Component={ProductDetail} />
          <Route path="*" element={<h2 style={{ textAlign: "center", margin:"2rem"}}>404 - Page Not Found</h2>} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
