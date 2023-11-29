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
import SoonApp from "./Components/SoonApp/SoonApp";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";

const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* User Registration form Component */}
        {/* <RegisterUserForm /> */}
        {/* Uncomment and add other components when needed */}
            
        {/* <BookingForm /> */}
        <RegisterUserForm />
        <BusReserve />
        <Navbar />
        <Search />
        <Home />
        {/* <UserForm /> */}
        <Support />
        <SoonApp />
        <MyAC />
        <Footer />
        
        <Info />
        {/* <Subs /> */}
        {/* <Travellers /> */}
        <Login1 />
        <Signup />
        
      </div>
    </AuthProvider>
  );
};

export default App;
