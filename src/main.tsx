import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import makeServer from "./mock/mirage";

import "./styles/index.css";
import "./styles/app.css";
import { RecoilRoot } from "recoil";

makeServer();

const rootElementRef = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElementRef).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
