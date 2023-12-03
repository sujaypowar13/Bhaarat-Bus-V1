/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Loginr";
import Signup from "./Components/Login/Signup";
import Home from "./Components/Home/Home";
import MyAC from "./Components/Login/MyAccount";
import { AuthProvider } from "../src/Components/Login/AuthContext";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Support from "./Components/Support/Support";
import BookingForm from "./Components/BookingForm/BookingForm";
import RegisterUserForm from "./Components/RegisterUserForm/RegisterUserForm";
import BusReserve from "./Components/BusReserve/BusReserve";
import SoonApp from "./Components/SoonApp/SoonApp";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Test, { ConfirmationScreen } from "./Components/Test/Test";
import UI from "./Components/UIX/UI";
import SelectPlan from "./Components/SelectPlan/SelectPlan";

const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* <Router>
            <Route exact path="/profile" element={<ConfirmationScreen />} />
        </Router> */}
        {/* <Navbar />
        <Home />
        <Support />
        <SoonApp />
        <Footer /> */}
         {/* <SelectPlan /> */}
        <Routes>
        {/* <Route path="/" element={() => <h1>Home</h1>} /> */}
        <Route path="/profile" element={<ConfirmationScreen />} />
      </Routes>
        <Login />
        {/* <BusReserve /> */}
        {/* <RegisterUserForm /> */}
        {/* <Signup />
        {/* {/* 
<Test />
        
        <UI/>
        
        <BookingForm /> 
        
        <UserForm /> 
        <Info />
        
        <MyAC /> */}
      </div>
    </AuthProvider>
  );
};

export default App;
