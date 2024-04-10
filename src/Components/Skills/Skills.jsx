import style from "./Skills.module.css";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Js from "../../assets/javascript.png";
import Ts from "../../assets/typescript.png";
import Tailwind from "../../assets/tailwind.png";
import ReactJs from "../../assets/reactjs.png"
import ReactRedux from "../../assets/redux.png"
import Bootstrap from "../../assets/bootstrap.svg"
import Mui from "../../assets/mui.png"
import Nextjs from "../../assets/nextjs.png"
import Git from "../../assets/github.png"
import Figma from "../../assets/figma.png"
import Nodejs from "../../assets/nodejs.png"
import Mongodb from "../../assets/mongodb.png"
import Java from "../../assets/java.svg"
import Mysql from "../../assets/mysql.png"
import Docker from "../../assets/docker.png"
import Appwrite from "../../assets/appwrite.png"
import Vercel from "../../assets/vercel.jpg"

const Skills = () => {
  return (
    <div className={style.skillsSection} id="skills">
      <h1 className={`${style.skillHeading} ${style.gradientText}`}>
        My Skills
      </h1>
      <p className={`${style.skillText} ${style.gradientText}`}>
        The Skill Set I Know
      </p>
      <div className={style.cardSection}>

        <div className={style.card}>
          <div className={style.tools}>
            <div className={style.circle}>
              <span className={`${style.red} ${style.box}`}></span>
            </div>
            <div className={style.circle}>
              <span className={`${style.yellow} ${style.box}`}></span>
            </div>
            <div className={style.circle}>
              <span className={`${style.green} ${style.box}`}></span>
            </div>
            <div className={style.ipLink}>
              <span className="material-symbols-outlined">language</span>
              https://www.kartiksapkal.dev/front-end/all-tech-stack/
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
          <div className={style.cardContent}>
            <div className={style.cardScreen}>
              <div className={style.content}>
                <h2>FrontEnd</h2>
                <div className={style.searchLink}>
                  <span className="material-symbols-outlined">language</span>
                  https://www.FrontEnd.dev/
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div className={style.techIcons}>
                  <div className={style.techIcon}>
                    <img src={Html} alt={Html} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Css} alt={Css} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Js} alt={Js} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Ts} alt={Ts} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Tailwind} alt={Tailwind} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={ReactJs} alt={ReactJs} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={ReactRedux} alt={ReactRedux} />
                  </div>
                  <div className={`${style.techIcon} ${style.bootstrap}`}>
                    <img src={Bootstrap} alt={Bootstrap} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Mui} alt={Mui} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Nextjs} alt={Nextjs} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Git} alt={Git} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Figma} alt={Figma} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.connections}>
          <div className={`${style.red} ${style.connect}`}></div>
          <div className={`${style.yellow} ${style.connect}`}></div>
          <div className={`${style.green} ${style.connect}`}></div>
        </div>

        <div className={style.card}>
          <div className={style.tools}>
            <div className={style.circle}>
              <span className={`${style.red} ${style.box}`}></span>
            </div>
            <div className={style.circle}>
              <span className={`${style.yellow} ${style.box}`}></span>
            </div>
            <div className={style.circle}>
              <span className={`${style.green} ${style.box}`}></span>
            </div>
            <div className={style.ipLink}>
              <span className="material-symbols-outlined">language</span>
              https://www.kartiksapkal.dev/back-end/all-tech-stack/
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>

          <div className={style.cardContent}>
            <div className={style.cardScreen}>
              <div className={style.content}>
                <h2>BackEnd</h2>
                <div className={style.searchLink}>
                  <span className="material-symbols-outlined">language</span>
                  https://www.BackEnd.dev/
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div className={style.techIcons}>
                  <div className={style.techIcon}>
                    <img src={Nodejs} alt={Nodejs} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Java} alt={Java} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Mysql} alt={Mysql} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Mongodb} alt={Mongodb} />
                  </div>
                  <div className={style.techIcon}>
                    <img src={Docker} alt={Docker} />
                  </div>
                  <div className={`${style.techIcon} ${style.appwrite}`}>
                    <img src={Appwrite} alt={Appwrite} />
                  </div>
                  <div className={`${style.techIcon} ${style.vercel}`}>
                    <img src={Vercel} alt={Vercel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
