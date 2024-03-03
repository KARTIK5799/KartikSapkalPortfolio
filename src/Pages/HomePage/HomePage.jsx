import About from "../../Components/About/About"
import HeroSection from "../../Components/HeroSection/HeroSection"
import WhatIDo from "../../Components/WhatIDo/WhatIDo"
import Projects from '../../Components/Projects/Projects'
import styles  from "./HomePage.module.css"
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection/>
      <WhatIDo/>
      <About/>
    <Projects/>
     </div>
  )
}

export default HomePage
