import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/index.css";
import "./styles/app.css";

const rootElementRef = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElementRef).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
