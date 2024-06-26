import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./Styles/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
