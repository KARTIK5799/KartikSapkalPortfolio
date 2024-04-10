import style from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.navContainer}>
      <div className={`${style.deskNav} ${style.glowEffect}`}>
        <nav className={style.navBar}>
          <div className={style.navLeft}>
            <p className={style.navLogoText}>Kartik sapkal</p>
          </div>
          <div className={style.navRight}>
            <ul className={style.navLinks}>
              <li
                className={`${style.navLink} ${
                  activeLink === "Home" ? style.active : ""
                }`}
                onClick={() => {
                  setActiveLink("Home");
                  scrollToSection("home");
                }}
              >
                Top
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "About" ? style.active : ""
                }`}
                onClick={() => {
                  setActiveLink("About");
                  scrollToSection("about");
                }}
              >
                About
              </li>
             
              <li
                className={`${style.navLink} ${
                  activeLink === "Projects" ? style.active : ""
                }`}
                onClick={() => {
                  setActiveLink("Projects");
                  scrollToSection("project");
                }}
              >
                Projects
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "Skills" ? style.active : ""
                }`}
                onClick={() => {
                  setActiveLink("Skills");
                  scrollToSection("skills");
                }}
              >
                Skills
              </li>
              <li
                className={`${style.navLink} ${
                  activeLink === "Contact" ? style.active : ""
                }`}
                onClick={() => {
                  setActiveLink("Contact");
                  scrollToSection("contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={style.mobiNav}>
        <div className={style.navBarMobile}>
          <ul className={style.navLinksMobile}>
          <li
              className={`${style.navLinkMobile} ${
                activeLink === "About" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("About");
                scrollToSection("about");
              }}
            >
              <span className="material-symbols-outlined">account_box</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Skills" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Skills");
                scrollToSection("skills");
              }}
            >
              <span className="material-symbols-outlined">code_blocks</span>
            </li>
           
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Home" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Home");
                scrollToSection("home");
              }}
            >
              <span className="material-symbols-outlined">home_app_logo</span>
            </li>

            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Projects" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Projects");
                scrollToSection("project");
              }}
            >
              <span className="material-symbols-outlined">developer_board</span>
            </li>
            <li
              className={`${style.navLinkMobile} ${
                activeLink === "Contact" ? style.active : ""
              }`}
              onClick={() => {
                setActiveLink("Contact");
                scrollToSection("contact");
              }}
            >
              <span className="material-symbols-outlined">contact_page</span>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
