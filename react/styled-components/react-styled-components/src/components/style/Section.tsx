import styled from "styled-components";
import physic from "../../assets/physics.jpg";

export const MainBanner = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  /* background-color: #3a3a3a; */

  background: ${`url(${physic})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  p {
    color: #ffffff;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
