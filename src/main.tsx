import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ModalProvider } from "./Providers";
import { GLobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GLobalStyles />
        <App />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
