import styled from "styled-components";

interface ContainerProps {
  flexDirection?: "row" | "column";

  gap?: string;
  widthProps?: string;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: ${(props) => (props.widthProps ? props.widthProps : "100%")};
  height: ${(props) => (props.height ? props.height : "40vh")};
  margin: auto;
  gap: ${(props) => (props.gap ? props.gap : "0")};
  background-color: #f8f2f2e2;

  p {
    color: gray;
    text-align: start;
  }
`;
