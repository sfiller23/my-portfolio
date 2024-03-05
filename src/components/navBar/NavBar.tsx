import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";
import { navMenus } from "./utils";

export default function NavBar() {
  const [click, setClick] = useState<boolean>(false);

  const location = useLocation();

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
                <Link
                  className={`navbar-container-menu-item-links ${
                    item.to === location.pathname ? "active" : ""
                  }`}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={() => setClick(!click)}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
}
