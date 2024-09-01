import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 7px 18px 24px 6px rgba(0, 0, 0, 0.89);

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    font-size: 18px;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`;
