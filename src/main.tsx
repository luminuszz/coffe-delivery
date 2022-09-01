import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import makeServer from "./mock/mirage";

import "./styles/index.css";
import "./styles/app.css";

makeServer();

const rootElementRef = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElementRef).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
