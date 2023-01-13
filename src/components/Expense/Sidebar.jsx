import React from "react";
import { userUserContext } from "../../store/userContext";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";

const Sidebar = () => {
  const { activeUser } = userUserContext();

  return (
    <aside className="eSideMain">
      <h1>Menu</h1>

      <div className="menu">{activeUser && <p>c</p>}</div>
    </aside>
  );
};

export default Sidebar;
