import React from "react";
import { userUserContext } from "../../store/userContext";
import { RiLogoutCircleRLine, RiUserReceived2Line } from "react-icons/ri";
import { AiOutlineUserAdd, AiFillPieChart } from "react-icons/ai";
import { useAppContext } from "../../store/appContext";
import { MdAccountBalanceWallet } from "react-icons/md";
import user from "../../assets/user.svg";

const Sidebar = () => {
  const { data, logoutUser, userData } = userUserContext();
  const { setShowModal, showModal } = useAppContext();
  const { isLoggedIn } = userData;

  return (
    <aside
      className={` ${
        showModal === "mobile" ? "expenseMainActive" : "eSideMain"
      }`}
    >
      <h1 className="eSidetitle">Menu</h1>

      <div className="menu">
        {isLoggedIn && (
          <div className="sideProfile" onClick={() => setShowModal("profile")}>
            <img src={data[0]?.photoURL || user} alt="user" />
            PROFILE
          </div>
        )}

        {isLoggedIn && (
          <div
            className="sideProfile"
            onClick={() => setShowModal("transaction")}
          >
            <MdAccountBalanceWallet size={32} />
            Transaction
          </div>
        )}

        {isLoggedIn && (
          <div className="sideProfile" onClick={() => setShowModal("chart")}>
            <AiFillPieChart size={32} />
            Chart
          </div>
        )}

        {isLoggedIn && (
          <div
            className="sideProfile"
            onClick={() => {
              logoutUser();
              setShowModal("");
            }}
          >
            <RiLogoutCircleRLine size={32} />
            LOGOUT
          </div>
        )}

        {!isLoggedIn && (
          <div className="sideProfile" onClick={() => setShowModal("signin")}>
            <RiUserReceived2Line size={32} />
            SIGN IN
          </div>
        )}

        {!isLoggedIn && (
          <div className="sideProfile" onClick={() => setShowModal("signup")}>
            <AiOutlineUserAdd size={32} />
            SIGN UP
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
