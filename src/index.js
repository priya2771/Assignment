import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Check if reportWebVitals.js exists before importing
// try {
//   const reportWebVitals = require("./reportWebVitals").default;
//   reportWebVitals();
// } catch (error) {
//   console.warn("reportWebVitals.js not found, skipping performance monitoring.");
// }

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
