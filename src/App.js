import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserCard from "./components/UserCard";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserCard />}></Route>
        <Route exact path="/home" element={<UserCard />}></Route>
        <Route exact path="/detail" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
