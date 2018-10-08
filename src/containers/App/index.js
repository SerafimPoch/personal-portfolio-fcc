import React from "react";
import Header from "../Header/";
import Main from "../Main";
import Footer from "../Footer";
import { Container } from "./style";

export default () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
