import React from "react";
import Title from "../../components/Main/title";
import Projects from "../../components/Main/projects";
import Button from "../../components/Main/button";
import { MainContainer } from "./style";

export default () => {
  return (
    <MainContainer>
      <Title />
      <Projects />
      <Button />
    </MainContainer>
  );
};
