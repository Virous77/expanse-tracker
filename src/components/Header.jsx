import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../store/appContext";

const Header = ({ name }) => {
  const { setShowModal } = useAppContext();

  return (
    <header className="header" onClick={() => setShowModal("")}>
      <h1>{name}</h1>
      <AiOutlineClose size={22} cursor="pointer" />
    </header>
  );
};

export default Header;
