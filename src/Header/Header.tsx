// import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // function handleNavClick() {
  //   setMenuOpen(!menuOpen);
  // }

  // function handleModeChange() {}

  return (
    <>
      <nav>
        <Link to="/" className="title">
          Dnyanesh
        </Link>
        {/* <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink onClick={handleNavClick} to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to={"/blogs"}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleNavClick} to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </>
  );
};

export default Header;
