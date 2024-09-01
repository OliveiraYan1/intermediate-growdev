import { Button } from "./style/Button";
import { MainBanner } from "./style/Section";
import { Title } from "./style/Title";

export function Banner() {
  return (
    <MainBanner>
      <Title color="white">Home</Title>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      <Button> Saiba mais </Button>
    </MainBanner>
  );
}
