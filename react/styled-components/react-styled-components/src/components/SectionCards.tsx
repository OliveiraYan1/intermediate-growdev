import { Avatar } from "./style/Avatar";
import { Button } from "./style/Button";
import { Card } from "./style/Card";
import { Container } from "./style/Container";

type CardContent = {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}


const cardsContent: CardContent[] = [
    {
        imgSrc: "https://picsum.photos/200",
        imgAlt: "",
        title: "Titulo 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgSrc: "https://picsum.photos/200",
        imgAlt: "",
        title: "Titulo 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        imgSrc: "https://picsum.photos/200",
        imgAlt: "",
        title: "Titulo 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

export function SectionCards () {
    return(
        <Container>
            {cardsContent.map((card) => {
                return (
                    <Card>
                        <Avatar src={card.imgSrc} alt = {card.imgAlt} />

                        <h1>{card.title}</h1>

                        <p>{card.description}</p>

                        <Button> Veja mais </Button>
                    </Card>
                )
            })}
        </Container>
    )
}