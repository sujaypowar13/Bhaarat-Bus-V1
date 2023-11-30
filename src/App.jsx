/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Login1 from "./Components/Login/Loginr";
import Signup from "./Components/Login/Signup";
import Home from "./Components/Home/Home";
import MyAC from "./Components/Login/MyAccount";
import { AuthProvider } from "../src/Components/Login/AuthContext";
import Support from "./Components/Support/Support";
import BookingForm from "./Components/BookingForm/BookingForm";
import RegisterUserForm from "./Components/RegisterUserForm/RegisterUserForm";
import BusReserve from "./Components/BusReserve/BusReserve";
import SelectPlan from "./Components/SelectPlan/SelectPlan";
import Test from "./Components/Test/Test";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Test/>
        <RegisterUserForm />
        {/* Uncomment and add other components when needed */}
        {/*
        User Registration form Component
        <RegisterUserForm />
        Bus Registration form Component
        <SelectPlan/>
        <BookingForm />
        User Registration form Component
        <RegisterUserForm />
        Bus booking form reservation  
        <BusReserve />
        <Navbar />
        <Search />
        <Home />
        <UserForm />
        <Support />
        <SoonApp />
        <MyAC />
        <Footer />
        
        <Info />
        <Subs />
        <Travellers />
        <Login1 />
        <Signup />
         */}
      </div>
    </AuthProvider>
  );
};

export default App;
