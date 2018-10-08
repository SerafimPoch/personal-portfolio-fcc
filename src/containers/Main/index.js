import React from "react";
import Projects from "../../components/Main/project";
import Contact from "../../components/Main/contacts";
import { MainContainer } from "./style";

export default () => {
  return (
    <MainContainer>
      <Projects />
      <Contact />
    </MainContainer>
  );
};
