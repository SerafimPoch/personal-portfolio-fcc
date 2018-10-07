import React from "react";
import Navbar from "../../components/Header/navbar";
import Profession from "../../components/Header/profession";
import { HeaderContainer } from "./style";

export default () => {
  return (
    <HeaderContainer>
      <Navbar />
      <Profession />
    </HeaderContainer>
  );
};
