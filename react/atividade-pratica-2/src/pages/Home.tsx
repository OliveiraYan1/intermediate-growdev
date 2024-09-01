import { Banner } from "../components/Banner";
import { Contact } from "../components/Contacts";
import { Footer } from "../components/Footer";
import { SectionCards } from "../components/SectionCards";
import { SectionTextImage } from "../components/SectionTextImage";
import { SectionTextImage2 } from "../components/SectionTextImage2";
import { SectionTextImageReverse } from "../components/SectionTextImageReverse";

export default function Home() {
  return (
    <>
      <Banner />
      <SectionCards />
      <SectionTextImage />
      <SectionTextImageReverse />
      <SectionTextImage2 />
      <Contact />
      <Footer />
    </>
  );
}
