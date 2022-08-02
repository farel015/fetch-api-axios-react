import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "./components/NavbarComp";
import SeluruhData from "./pages/SeluruhData";
import SatuData from "./pages/SatuData";
import HomePages from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/seluruhdata" element={<SeluruhData />} />
        <Route path="/satudata" element={<SatuData />} />
      </Routes>
    </div>
  );
}

export default App;
