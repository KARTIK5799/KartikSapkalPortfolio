import About from "../../Components/About/About";
import HeroSection from "../../Components/HeroSection/HeroSection";
import WhatIDo from "../../Components/WhatIDo/WhatIDo";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import styles from "./HomePage.module.css";

import Contact from "../../Components/Contact/Contact";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <WhatIDo />
      <About />
      <Projects />
      <Skills />

      <Contact />
    </div>
  );
};

export default HomePage;
