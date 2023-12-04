<<<<<<< HEAD
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
import Footer from "./Components/Footer/Footer";
import SoonApp from "./Components/SoonApp/SoonApp";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Booking from './Components/BookingForm/BookingForm';
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <div>
        <Navbar />
        <Home />
        <Support />
        <SoonApp />
        <Footer />

        {/* Uncomment and add other components when needed */}
        {/*
        <Test />
        <Search />
        User Registration form Component
        <RegisterUserForm />
        Bus Registration form Component
        <SelectPlan/>
        <BookingForm />
        User Registration form Component
        <RegisterUserForm />
        Bus booking form reservation  
        <BusReserve />
        
        <UserForm />
        
        
        <MyAC />
       
        
        <Info />
        <Subs />
        <Travellers />
        <Login1 />
        <Signup />
         */}
=======
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/booking" element={<Booking/>} />
        </Routes>
>>>>>>> 0bfd5974ae67610230abfb42f799c110afc8ae43
      </div>
    </Router>
  );
}

export default App;
