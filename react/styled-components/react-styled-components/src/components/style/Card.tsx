import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: auto;
max-width: 320px;
padding: 20px;
gap: 16px;

h1 {
    font-size: 2em;
}

@media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
}

`;