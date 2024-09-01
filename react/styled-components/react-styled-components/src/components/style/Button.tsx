import styled from "styled-components";
type TSize = "small" | "medium" | "large";

interface ButtonProps {
  size: TSize;
}

export const Button = styled.button<ButtonProps>`
  color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor};
  border: 1px ${(props) => props.theme.primaryColor} solid;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px ${(props) => props.theme.primaryColor} solid;
    box-shadow: 0 0 0 5px rgb(0, 0, 0, 0.5);
  }

  &:disabled {
    background-color: #020a1532;
    border: 1px #3333 solid;
    box-shadow: none;
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `padding: 12px 18px;`;
      case "medium":
        return `padding: 14px 22px;`;

      case "large":
        return `padding: 18px 28px;`;

      default:
        return `padding: 18px 28px;`;
    }
  }}
`;
