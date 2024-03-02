import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { navMenus } from "./config";
import "./navBar.scss";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to={"/"} className="navbar-container-logo">
            <FaReact size={30} />
          </Link>
          <ul
            className={
              click ? "navbar-container-menu active" : "navbar-container-menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar-container-menu-item">
                <Link className="navbar-container-menu-item-links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
}
