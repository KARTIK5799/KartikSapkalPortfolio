import style from './HeroSection.module.css';
import NavBar from './NavBar/NavBar';
import PlanetSetup from './PlanetSetup/PlanetSetup';

const HeroSection = () => {
  return (
    <div >
      <NavBar />
      <div className={style.heroSection}>
        <PlanetSetup />
        <div className={style.heroText}>
          <h1>
            <span className={`${style.hello} ${style.gradientText}`}>Hello!</span> <br/>I am  <span className={`${style.name} ${style.gradientText}`}>Kartik Sapkal </span>
          </h1>
          <p>Frontend Developer</p>
          <div className={style.buttons}>
          <button className={style.button1}>Download CV</button>
          <button  className={style.button2}>Email me</button>
          </div>
          <div className={style.downIcon}>
        <span className='material-symbols-outlined'>
expand_circle_down
</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
