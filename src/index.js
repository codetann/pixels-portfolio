import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Provider from "./context/Provider";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
