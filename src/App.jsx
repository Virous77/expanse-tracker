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
import Loader from "./components/UI/Loader";
import Transaction from "./components/Expense/Transaction";
import { BsFilterCircleFill } from "react-icons/bs";

function App() {
  const { notification, setShowModal, showModal, setShowFilter } =
    useAppContext();
  const { getCurrentUser, loading, setUserData, userData, initialState } =
    userUserContext();

  useEffect(() => {
    getCurrentUser();
    const result = localStorage.getItem("expense");
    const userActive = result ? JSON.parse(result) : false;

    if (userActive) {
      setUserData({ ...userData, isLoggedIn: true });
    } else {
      setUserData(initialState);
    }
  }, [userData.isLoggedIn]);

  if (loading) return <Loader />;

  return (
    <main className="App">
      {showModal === "signup" && <Register />}
      {showModal === "signin" && <Login />}
      <Expense />
      {showModal === "calac" && <Calculator />}
      {showModal === "profile" && <Profile />}
      {showModal === "transaction" && <Transaction />}
      {notification && <Notification />}
      {!showModal && (
        <button className="showCalc" onClick={() => setShowModal("calac")}>
          <FcCalculator size={35} />
        </button>
      )}

      {showModal === "transaction" && (
        <button className="showCalc">
          <BsFilterCircleFill
            size={35}
            color="white"
            onClick={() => setShowFilter(true)}
          />
        </button>
      )}
    </main>
  );
}

export default App;
