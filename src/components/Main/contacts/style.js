import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: #c8f7c5;
  padding: 150px 0px 150px 0px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 100px 0px 100px 0px;
  }
`;
