import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Booking from './Components/BookingForm/BookingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/booking" element={<Booking/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
