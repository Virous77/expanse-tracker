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
import useFetchCollectionByUid from "./hooks/useFetchUserByUid";
import { useFilter } from "./store/filterContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { notification, setShowModal, showModal, setShowFilter } =
    useAppContext();
  const { setTransactionData, setHoldData } = useFilter();
  const {
    getCurrentUser,
    loading,
    setUserData,
    userData,
    initialState,
    activeUser,
  } = userUserContext();
  const { data } = useFetchCollectionByUid("userId", activeUser.uid, "expense");

  ////Fetch CurrentUser
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

  ///FetchData
  useEffect(() => {
    setTransactionData(data);
    setHoldData(data);
  }, [data]);

  if (loading) return <Loader />;

  return (
    <main className="App">
      <Navbar />
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
