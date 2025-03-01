import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Rendert die Haupt-App Komponente in den DOM */}
  </React.StrictMode>
);

