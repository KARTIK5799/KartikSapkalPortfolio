import style from './Projects.module.css';
import { motion } from "framer-motion";
import projectImg from '../../assets/projectimg/p1.png';
import {projectData} from '../../Api/Projects';
import {useRef,useEffect,useState} from 'react'

const Projects = () => {
  const [width,setWidth]=useState(0);
  const carousel=useRef();

useEffect(()=>{
  setWidth(carousel.current.scrollWidth-carousel.offsetWidth);
},[]);

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-20%",
      transition: {
        repeat: Infinity,
        repeatType:"loop",
        duration: 20,
        ease:"linear"
      },
    },
  };

  const sliderVariantsright = {
    initial: {
      x: 0,
    },
    animate: {
      x: "20%",
      transition: {
        repeat: Infinity,
        repeatType:"loop",
        duration: 20,
        ease:"linear"
      },
    },
  };

  return (
    <div className={style.ProjectSection}>
      <h1 className={`${style.projectHeading} ${style.gradientText}`}>
        My Projects
      </h1>
      <p className={`${style.projectText} ${style.gradientText}`}>
        Most Recent Works
      </p>

      <motion.div className={style.carousel} ref={carousel} whileTap={{cursor:"grabbing"}}>
        <motion.div className={style.innerCarousel} drag="x" dragConstraints={{right:0,left:-width}}>
          {projectData.map((project) => (
            <motion.div className={style.item} key={project.id}>
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
                    <p className={style.details}>{project.details}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* <motion.div
        className={style.slidingTextCintainerright}
        variants={sliderVariantsright}
        initial="initial"
        animate="animate"
      >
        Projects Projects Projects Projects
      </motion.div>
      <motion.div
        className={style.slidingTextCintainerleft}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Projects Projects Projects Projects Projects Projects Projects Projects
      </motion.div> */}
    </div>
  );
};

export default Projects;
