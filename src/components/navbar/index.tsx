import React from "react";
import BackgroundToggler from "../background-toggler";
import NavbarProps from "./index.d";
import NavbarStyled from "./index.styled";

const Navbar = (props: NavbarProps) => {
  const { togglerRef, onClick } = props;

  return (
    <NavbarStyled>
      <BackgroundToggler
        aria-labelledby="Change current visual theme"
        ref={togglerRef}
        onClick={onClick}
      />
    </NavbarStyled>
  );
};

export default Navbar;
