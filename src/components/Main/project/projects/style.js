import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 20px;
  width: 70%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const SquereProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  width: 100%;
`;

export const SquereProject = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 260px;
  height: 180px;
  border: 2px solid lightblue;

  p {
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 85%;
`;
