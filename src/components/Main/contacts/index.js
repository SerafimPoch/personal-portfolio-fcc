import React from "react";
import Title from "./title";
import Circles from "./circles";
import { ContactContainer } from "./style";

export default () => {
  return (
    <ContactContainer>
      <Title />
      <Circles />
    </ContactContainer>
  );
};
