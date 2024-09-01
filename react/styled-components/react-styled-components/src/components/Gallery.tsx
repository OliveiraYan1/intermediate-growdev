import { Button } from "./style/Button";
import { Container } from "./style/Container";
import { GalleryContent } from "./style/GalleryContent";
import { Title } from "./style/Title";

const imgsContent = Array.from({ length: 9 }, (_, index) => ({
  imgSrc: "https://picsum.photos/200",
  imgAlt: `Imagem ${index}`,
}));

export function Gallery() {
  return (
    <Container flexDirection="column" gap="28px">
      <Title>Minha Galeria</Title>

      <GalleryContent>
        {imgsContent.map((item) => (
          <img src={item.imgSrc} alt={item.imgAlt} />
        ))}
      </GalleryContent>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button> Saivba mais </Button>
    </Container>
  );
}
