/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Home/Home";

import Support from "./Components/Support/Support";

import Footer from "./Components/Footer/Footer";
import SoonApp from "./Components/SoonApp/SoonApp";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Support />
      <SoonApp />
      <Footer />

      {/*
        <Test />
        <Search />
        <RegisterUserForm />
        <SelectPlan/>
        <BookingForm />
        <RegisterUserForm />
        <BusReserve />
        <UserForm />
        <MyAC />
        <Login1 />
        <Signup />
         */}
    </div>
  );
}

export default App;
