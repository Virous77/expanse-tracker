import React from "react";
import "./Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { useAppContext } from "../../store/appContext";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { setShowModal, showModal } = useAppContext();

  return (
    <nav className="navbar">
      <h1>Track Daily</h1>
      {showModal === "mobile" ? (
        <AiOutlineClose size={24} onClick={() => setShowModal("")} />
      ) : (
        <RiMenu3Fill size={24} onClick={() => setShowModal("mobile")} />
      )}
    </nav>
  );
};

export default Navbar;
