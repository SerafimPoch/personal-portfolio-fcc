import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Header/navbar";
import Profession from "../../components/Header/profession";
import { HeaderContainer } from "./style";

export default () => {
  return (
    <HeaderContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Fcc</title>
      </Helmet>
      <Navbar />
      <Profession />
    </HeaderContainer>
  );
};
