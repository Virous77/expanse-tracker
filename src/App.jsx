import React, { useEffect } from "react";
import Register from "./components/auth/Register";
import Notification from "./components/Notification/Notification";
import { useAppContext } from "./store/appContext";
import Login from "./components/auth/Login";
import Expense from "./components/Expense/Expense";
import Profile from "./components/profile/Profile";
import { userUserContext } from "./store/userContext";

function App() {
  const { notification } = useAppContext();
  const { getCurrentUser } = userUserContext();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <main className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Expense /> */}
      <Profile />
      {notification && <Notification />}
    </main>
  );
}

export default App;
