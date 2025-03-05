import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage"; // Ensure this file exists
import "./styles/MainPage.css"; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
