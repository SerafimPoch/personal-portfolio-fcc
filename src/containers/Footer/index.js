import React from "react";
import { FooterContainer } from "./style";

export default () => {
  return (
    <FooterContainer>
      <p>
        This is just a fake portfolio.. All the projects and contact details
        given are not real..
      </p>
      <p>
        © Created for
        <a
          href="https://www.freecodecamp.org/"
          style={{ color: "white", borderBottom: "1px solid white" }}
        >
          FreeCodeCamp
        </a>
      </p>
    </FooterContainer>
  );
};
