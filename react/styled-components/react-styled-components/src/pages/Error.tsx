import { Link } from "react-router-dom";
import { Button } from "../components/style/Button";
import { Container } from "../components/style/Container";
import { Title } from "../components/style/Title";

export function Error() {
  return (
    <Container flexDirection="Column">
      <Title>Página não encontrada</Title>

      <Link to="/">
        <Button>Voltar para home</Button>
      </Link>
    </Container>
  );
}
