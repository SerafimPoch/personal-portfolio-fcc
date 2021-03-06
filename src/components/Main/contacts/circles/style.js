import styled from "styled-components";

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px solid #90c695;
  background: #e4f1fe;
  color: green;
  font-weight: bold;
  text-decoration: none;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 9px;
    text-align: center;
  }
`;
