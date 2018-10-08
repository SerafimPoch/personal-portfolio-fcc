import React from "react";
import { CirclesContainer, Circle } from "./style";

export default () => {
  return (
    <CirclesContainer>
      <Circle href="https://www.facebook.com/serafim.pochapinsky.9">
        Facebook
      </Circle>
      <Circle href="https://github.com/SerafimPoch">GitHub</Circle>
      <Circle href="https://twitter.com/freecodecamp">Twitter</Circle>
      <Circle href="mailto:serafimpoch@gmail.com">Send a mail</Circle>
      <Circle href="tel:555-555-555">Call me</Circle>
    </CirclesContainer>
  );
};
