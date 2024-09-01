import { Avatar } from "./style/Avatar";
import logo from "../assets/business logo.webp";
import { Button } from "./style/Button";
import { Header } from "./style/Header";
import { Link } from "react-router-dom";
import { Navigation } from "../configs/navigation/types";

interface NavBarProps {
  navigations: Navigation[];
}

export function NavBar({ navigations }: NavBarProps) {
  return (
    <Header>
      <Avatar src={logo} alt="Logo" size="sm" backgroundColor="lightBlue" />
      <nav>
        {navigations.map((nav) => {
          return <Link to={nav.to}>{nav.title}</Link>;
        })}
        <Button size="small">Login</Button>
      </nav>
    </Header>
  );
}
