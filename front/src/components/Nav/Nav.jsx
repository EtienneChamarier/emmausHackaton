import { Link } from "react-router-dom";
import "./Nav.scss";
import Emmaus from "../../assets/icones/Emmaus_Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#landing">
        <img src={Emmaus} alt="logo emmaus connect" />
      </a>
      <div className="navbarLink">
        <Link to="/">Faire un don</Link>
        <Link href="#impact">À propos</Link>
        <Link to="/">F.A.Q </Link>
      </div>
    </nav>
  );
};

export default Navbar;
