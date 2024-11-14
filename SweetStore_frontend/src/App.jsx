import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import Verify from "./components/Verify";
import Orders from "./components/Orders";

const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
      <div className="App min-h-screen">
        <Hero setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
        <Footer className="mb-0 fixed" />
      </div>
    </>
  );
};

export default App;
