import "./App.css";
import * as React from "react";
// react router dom start
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages start
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MyFlights />} />
      </Routes>
    </Router>
  );
}

export default App;
