import styled from "styled-components";

export const GalleryContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    img {
        width: 100%;
        height: auto;
        min-width: 250 px;
        &:hover {
        scale: 1.01;
    }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat (2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat (1, 1fr);
    }

    

    
`