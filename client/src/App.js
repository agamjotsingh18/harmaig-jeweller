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
import Profile from "./pages/Profile";
import KnowUs from "./pages/KnowUs";
import ContactUs from "./pages/ContactUs";
import DoorwayDeals from "./pages/DoorwayDeals";
import CategoryList from "./pages/CategoryList";
import FAQs from "./pages/FAQs";
import EarringsCategories from "./pages/EarringsCategories";

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
          <Route path="/profile" element={<Profile />} /> {/* Login page */}
          <Route path="/wishlist" Component={Wishlist} />
          <Route path="/cart" Component={Cart} />
          <Route path="/orders" Component={Orders} />
          <Route path="/stores" Component={Stores} />
          <Route path="/earrings" element={<EarringsCategories />} /> {/* New Route */}
          <Route exact path="/categories" Component={CategoryList} />
          <Route exact path="/products" Component={ProductList} />
          <Route path="/product-detail/:productId" Component={ProductDetail} />
          <Route path="*" element={<h2 style={{ textAlign: "center", margin:"2rem"}}>404 - Page Not Found</h2>} />

          <Route path="/know-us" element={<KnowUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* <Route path="/7-day-returns" element={<SevenDayReturns />} />
          <Route path="/lifetime-exchange" element={<LifetimeExchange />} /> */}
          <Route path="/doorway-deals" element={<DoorwayDeals />} />
          {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/personalisation" element={<Personalisation />} />
          <Route path="/art-of-gifting" element={<ArtOfGifting />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/gold-sip-and-reward" element={<GoldSipAndReward />} /> */}
        </Routes>
        <br/>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
