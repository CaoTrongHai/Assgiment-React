import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import PurchasePolicy from "./pages/PurchasePolicy";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/purchasepolicy" element={<PurchasePolicy />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/editprofile/:id" element={<EditProfile />} />
        <Route path="/changepassword/:id" element={<ChangePassword />} />
        <Route path="/cart" element ={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
