import "../style/navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nav_div">
      <nav>
        <Link to="/#home">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </div>
  );
}
