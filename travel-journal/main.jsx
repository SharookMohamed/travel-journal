import React from "react";
import ReactDOM from "react-dom/client";

// ---------------------------
import Navbar from "./components/Navbar.jsx";
import CardsTravel from "./components/CardsTravel.jsx";
import "./css/style.css";
// --------------------------


ReactDOM.createRoot(document.querySelector(".travel-journal")).render(
  <React.StrictMode>
    <Navbar />
    <CardsTravel />
  </React.StrictMode>
);