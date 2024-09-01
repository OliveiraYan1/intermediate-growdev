import styled from "styled-components";

interface ContainerProps {
  flexDirection?: "row" | "column";

  gap?: string;
  widthProps?: string;
  height?: string;
}

export const DivText = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: ${(props) => (props.widthProps ? props.widthProps : "100%")};
  height: ${(props) => (props.height ? props.height : "40vh")};
  gap: 10px;
`;
