import { Container } from "./styles/Container";
import { DivText } from "./styles/DivText";
import { StyledImg } from "./styles/StyledImg";

export function SectionTextImage2() {
  return (
    <Container height="60vh">
      <Container flexDirection="column" widthProps="50%">
        <DivText flexDirection="column" height="100%" widthProps="50%">
          <h3>Lorem Ipsum</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            vitae accusamus quia necessitatibus reiciendis nisi, impedit
            voluptates amet similique omnis minus aperiam inventore, labore
            dolores reprehenderit, delectus beatae ducimus adipisci! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nam molestiae quae
            similique dolores? Dolorum distinctio voluptates cum? Explicabo
            velit tempora nostrum esse doloremque, illo voluptate? Inventore
            reiciendis sit illo eum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </DivText>
      </Container>
      <Container widthProps="50%" height="100%">
        <StyledImg src="src/assets/criancagrow.jpeg" alt="Criança Grow" />
      </Container>
    </Container>
  );
}
