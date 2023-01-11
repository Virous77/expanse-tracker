import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./store/userContext";
import { AppContextProvider } from "./store/appContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserContextProvider>
          <App />
          <ReactQueryDevtools />
        </UserContextProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
