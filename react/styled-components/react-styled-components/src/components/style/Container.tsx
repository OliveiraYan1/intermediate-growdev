import styled from "styled-components";

interface ContainerProps {
    flexDirection?: "row" | "column";
    gap?: string
}


export const Container = styled.section<ContainerProps>`
display: flex;
flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
justify-content: space-around;
align-items: center;
text-align: center;
width: 100%;
height: auto;
margin: auto;
max-width: 1444px;
padding: 40px 0;
gap: ${props => props.gap ?? 0};

@media screen and (max-width: 768px) {
    flex-direction: column;
}

`