import style from "./About.module.css";
import aboutImg from "../../assets/about-image.svg";
import github from "../../assets/Github.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/LinkedIn.svg";
import discord from "../../assets/Discord.svg";

const About = () => {
  return (
    <div className={style.AboutSection} id="about">
      <h1 className={`${style.aboutHeading} ${style.gradientText}`}>
        About Me!
      </h1>
      <p className={`${style.aboutText} ${style.gradientText}`}>
        My Introduction
      </p>
      <div className={style.aboutCard}>
        <div className={style.imgSection}>
          <div className={style.imgBag}>
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className={style.infoSection}>
          <div className={style.details}>
            <div className={style.myName}>
              <h2>Kartik Sapkal</h2>
            </div>
            <div className={style.description}>
              <p>
                FrontEnd Developer, I create web Pages with Html, Css,
                JavaScript and ReactJs, I have 1 years of experience, many
                clients are happy with the project carried out.
              </p>
            </div>
            <div className={style.education}>
              <div className={style.education1}>
                <h3>Bachelor of Computer Science</h3>
                <p>Dr.Babasaheb Ambedkar Marathwada University</p>
                <p>
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  2020 - 2023
                </p>
              </div>

              <div className={style.education2}>
                <h3>Diploma in Computer Technology</h3>
                <p>Maharashtra State Board of Technical Education</p>
                <p>
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  2017 - 2020
                </p>
              </div>
            </div>
            <div className={style.social}>
              <a href="https://github.com/KARTIK5799" target="blank">
                <img src={github} alt="Github" />
              </a>
              <a href="https://twitter.com/thekartiksapkal" target="blank">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/thekartiksapkal/" target="blank">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/kartiksapkal/" target="blank">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://discord.com/invite/fZ3rGHnJ" target="blank">
                <img src={discord} alt="Discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
