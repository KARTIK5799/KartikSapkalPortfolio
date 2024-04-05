import style from './Projects.module.css';
import projectImg from '../../assets/1.png';
import {projectData} from '../../Api/Projects';


const Projects = () => {


  return (
    <div className={style.ProjectSection}>
      <h1 className={`${style.projectHeading} ${style.gradientText}`}>
        My Projects
      </h1>
      <p className={`${style.projectText} ${style.gradientText}`}>
        Most Recent Works
      </p>

      <div className={style.carousel} >
        <div className={style.innerCarousel} >
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
                <div className={style.cardContent}>
                  <img className={style.image} src={projectImg} />
                  <div className={style.cardContent}>
                    <h3 className={style.title}>{project.title}</h3>
                    <p className={style.description}>{project.description}</p>
                    <div className={style.links}>
                      <a
                        href={project.liveLink}
                        className={style.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className={style.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Projects;
