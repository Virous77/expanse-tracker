import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./store/userContext";
import { AppContextProvider } from "./store/appContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
