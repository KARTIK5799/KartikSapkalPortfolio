import style from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className={style.navContainer}>
      {/* nav for pc and tablet  */}
      <div className={`${style.deskNav} ${style.glowEffect}`}>
        <nav className={style.navBar}>
          <div className={style.navLeft}>
            <p className={style.navLogoText}>Kartik sapkal</p>
          </div>
          <div className={style.navRight}>
            <ul className={style.navLinks}>
              {/* Add the active class based on activeLink state */}
              <li
                className={`${style.navLink} ${
                  activeLink === "Home" ? style.active : ""
                }`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "About" ? style.active : ""
                }`}
                onClick={() => setActiveLink("About")}
              >
                About
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "Skills" ? style.active : ""
                }`}
                onClick={() => setActiveLink("Skills")}
              >
                Skills
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "Projects" ? style.active : ""
                }`}
                onClick={() => setActiveLink("Projects")}
              >
                Projects
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "Contact" ? style.active : ""
                }`}
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* nav for mobile devices */}
      <div className={style.mobiNav}>
        <div className={style.navBarMobile}>
          <ul className={style.navLinksMobile}>
            {/* Add the active class based on activeLink state */}
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Skills" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Skills");
                console.log("skills");
              }}
            >
              <span className="material-symbols-outlined">code_blocks</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Projects" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Projects");
                console.log("project");
              }}
            >
              <span className="material-symbols-outlined">developer_board</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Home" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Home");
                console.log("home");
              }}
            >
              <span className="material-symbols-outlined">home_app_logo</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Contact" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Contact");
                console.log("contact");
              }}
            >
              <span className="material-symbols-outlined">contact_page</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "About" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("About");
                console.log("About");
              }}
            >
              <span className="material-symbols-outlined">account_box</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
