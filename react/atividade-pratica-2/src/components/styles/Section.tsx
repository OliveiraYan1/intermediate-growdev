import styled from "styled-components";
import background from "../../assets/background-section.jpg";

interface SectionProps {
  height?: string;
}

export const StyledSection = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "40vh")};

  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
