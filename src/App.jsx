import React, { useEffect } from "react";
import Register from "./components/auth/Register";
import Notification from "./components/Notification/Notification";
import { useAppContext } from "./store/appContext";
import Login from "./components/auth/Login";
import Expense from "./components/Expense/Expense";
import Profile from "./components/profile/Profile";
import { userUserContext } from "./store/userContext";
import Calculator from "./components/calculator/Calculator";
import { FcCalculator } from "react-icons/fc";

function App() {
  const { notification, setShowCalc, showCalc } = useAppContext();
  const { getCurrentUser } = userUserContext();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <main className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      <Expense />
      {showCalc && <Calculator />}
      {/* <Profile /> */}
      {notification && <Notification />}
      <button className="showCalc" onClick={() => setShowCalc(!showCalc)}>
        <FcCalculator size={35} />
      </button>
    </main>
  );
}

export default App;
