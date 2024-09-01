import { ReactNode } from "react";
import { NavBar } from "../../components/NavBar";
import { navigations } from "../navigation/navigation";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <NavBar navigations={navigations} />
      {children}
      <footer>Meu footer</footer>
    </>
  );
}
