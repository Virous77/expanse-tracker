import React from "react";
import Register from "./components/auth/Register";
import Notification from "./components/Notification/Notification";
import { useAppContext } from "./store/appContext";
import Login from "./components/auth/Login";

function App() {
  const { notification } = useAppContext();

  return (
    <main className="App">
      {/* <Register /> */}
      <Login />
      {notification && <Notification />}
    </main>
  );
}

export default App;
