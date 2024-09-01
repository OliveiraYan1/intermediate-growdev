import styled from "styled-components";

type TColor = "black" | "white";

interface TitleProps {
  color?: TColor;
}

export const Title = styled.h1<TitleProps>`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color === "white" ? " #ffffff" : "#000"};
`