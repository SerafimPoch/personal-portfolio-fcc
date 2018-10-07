import React from "react";
import { NavbarContainer, Navbar } from "./style";

export default () => {
  return (
    <NavbarContainer>
      <Navbar>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </Navbar>
    </NavbarContainer>
  );
};
