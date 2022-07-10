import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./components/UserCard";
import Details from "./components/Details";
import NoMatch from "./components/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserCard />}></Route>
        <Route path="/home" element={<UserCard />}></Route>
        <Route exact path="/users/:id" element={<Details />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
