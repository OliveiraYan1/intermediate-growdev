import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;

    li {
      color: blue;
    }
  }
`;
