import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}