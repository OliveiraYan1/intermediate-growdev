import styled from "styled-components";

type TSize = "footer" | "sm" | "md" | "lg";

interface IconProps {
  size: TSize;
}

export const Icon = styled.img<IconProps>`
  height: auto;
  margin: 10px;

  ${(props) => {
    switch (props.size) {
      case "footer":
        return `width: 25px;`;
      case "sm":
        return `width: 50px;`;

      case "md":
        return `width: 150px;`;
      case "lg":
        return `width: 200px;`;
      default:
        break;
    }
  }}
`;
