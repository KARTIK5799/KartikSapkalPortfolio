import style from "./Projects.module.css";

import { projectData } from "../../Api/Projects";

const Projects = () => {
  return (
    <div className={style.ProjectSection} id="project">
      <h1 className={`${style.projectHeading} ${style.gradientText}`}>
        My Projects
      </h1>
      <p className={`${style.projectText} ${style.gradientText}`}>
        Most Recent Works
      </p>

      <div className={style.carousel}>
        <div className={style.innerCarousel}>
          {projectData.map((project) => (
            <div className={style.item} key={project.id}>
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
                </div>
                <a
                  href={project.liveLink}
                  className={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={style.cardContent}>
                    <img className={style.image} src={project.image} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


