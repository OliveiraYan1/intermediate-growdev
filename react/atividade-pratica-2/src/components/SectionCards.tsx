import { Card } from "./styles/Card";
import { Container } from "./styles/Container";
import { Icon } from "./styles/Icon";

type CardContent = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const cardContents: CardContent[] = [
  {
    imgSrc: "src/assets/computerIcon.png",
    imgAlt: "Logo computador",
    title: "Somente para desktop",
    description: "Vamos aprender como utilizar um framework.",
  },
  {
    imgSrc: "src/assets/stackIcon.png",
    imgAlt: "Icone",
    title: "Criado com componentes",
    description: "Utilizamos o Styled Components.",
  },
  {
    imgSrc: "src/assets/check.png",
    imgAlt: "Check Icone",
    title: "Fácil aproveitamento",
    description: "Estamos no caminho.",
  },
];

export function SectionCards() {
  return (
    <Container gap="30px 0">
      {cardContents.map((card) => {
        return (
          <Card>
            <Icon size="sm" src={card.imgSrc} alt={card.imgAlt} />
            <h3>{card.title}</h3>

            <p>{card.description}</p>
          </Card>
        );
      })}
    </Container>
  );
}
