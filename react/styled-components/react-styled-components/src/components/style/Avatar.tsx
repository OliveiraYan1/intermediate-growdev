import styled from "styled-components";
type TSize = "sm" | "md" | "lg";

interface AvatarProps {
  size: TSize;
}

export const Avatar = styled.img<AvatarProps>`
  height: auto;
  border-radius: 50%;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return `width: 30px;`;

      case "md":
        return `width: 150px;`;
      case "lg":
        return `width: 200px;`;
      default:
        break;
    }
  }}
`;
