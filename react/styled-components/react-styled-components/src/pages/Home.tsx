import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import { SectionCards } from "../components/SectionCards";
import { Diveder } from "../components/style/Divider";
import { DefaultLayout } from "../configs/layout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <SectionCards />
      <Diveder />
      <Gallery />
    </DefaultLayout>
  );
}
