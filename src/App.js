// import CSS styles
import "./App.css";

// import libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import custom components
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myflights" element={<MyFlights />} />
    </Routes>
  </Router>
);

export default App;
