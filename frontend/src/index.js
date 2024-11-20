import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./Theme/Theme";
import { ToastContainer } from "react-toastify";
import Router from "./Routes/routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={Theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <Router />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
