import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./store/userContext";
import { AppContextProvider } from "./store/appContext";
import { ExpenseContextProvider } from "./store/expenseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <ExpenseContextProvider>
          <App />
        </ExpenseContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
