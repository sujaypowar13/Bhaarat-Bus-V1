/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import SoonApp from "./Components/SoonApp/SoonApp";
import Booking from "./Components/Booking/Booking";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <SoonApp />
      <Footer />

      {/*
      
      <Info />
      <Subs/>
     <Travellers/>
      */}
    </div>
  );
};

export default App;
