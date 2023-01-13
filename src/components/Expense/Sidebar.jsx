import React from "react";
import { userUserContext } from "../../store/userContext";
import { RiLogoutCircleRLine, RiUserReceived2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useAppContext } from "../../store/appContext";

const Sidebar = () => {
  const { data, logoutUser, userData } = userUserContext();
  const { setShowModal } = useAppContext();
  const { isLoggedIn } = userData;

  return (
    <aside className="eSideMain">
      <h1>Menu</h1>

      <div className="menu">
        {isLoggedIn && (
          <div className="sideProfile" onClick={() => setShowModal("profile")}>
            <img src={data[0]?.photoURL} alt="user" />
            PROFILE
          </div>
        )}

        {isLoggedIn && (
          <div className="sideProfile" onClick={logoutUser}>
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
