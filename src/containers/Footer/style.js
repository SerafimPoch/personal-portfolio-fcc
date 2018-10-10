import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #22313f;
  color: white;
  line-height: 40px;

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 0px;
    font-size: 12px;
    text-align: center;
  }
`;
