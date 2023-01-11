import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ name }) => {
  return (
    <header className="header">
      <h1>{name}</h1>
      <AiOutlineClose size={22} cursor="pointer" />
    </header>
  );
};

export default Header;
