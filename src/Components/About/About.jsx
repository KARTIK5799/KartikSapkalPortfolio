import style from './About.module.css'
import aboutImg from '../../assets/about-image.svg'
import github from '../../assets/Github.svg'
import twitter from '../../assets/Twitter.svg'
import instagram from '../../assets/Instagram.svg'
import linkedin from '../../assets/LinkedIn.svg'
import discord from '../../assets/Discord.svg'


const About = () => {


    return (
        <div className={style.AboutSection}>
            <h1  className={`${style.aboutHeading} ${style.gradientText}`}>About Me!</h1>
            <p className={`${style.aboutText} ${style.gradientText}`}>My Introduction</p>
            <div className={style.aboutCard}>
                <div className={style.imgSection}>
                    <div className={style.imgBag}>
                        <img src={aboutImg} alt="" />

                    </div>
                </div>
                <div className={style.infoSection}>
                    <div className={style.details}>
                        <div className={style.myName}>
                            <h2 >Kartik Sapkal</h2>

                        </div>
                        <div className={style.description}>
                            <p>FrontEnd Developer, I create web Pages with Html, Css, JavaScript and ReactJs, I have 1 years of experience, many clients are happy with the project carried out.</p>
                        </div>
                        <div className={style.education}>

                            <div className={style.education1}>
                                <h3>Bachelor of Computer Science</h3>
                                <p>Dr.Babasaheb Ambedkar Marathwada University</p>
                                <p><span className="material-symbols-outlined">
                                    calendar_month
                                </span>2020 - 2023</p>
                            </div>

                            <div className={style.education2}>
                            <h3>Diploma in Computer Technology</h3>
                            <p>Maharashtra State Board of Technical Education</p>
                                <p><span className="material-symbols-outlined">
                                    calendar_month
                                </span>2017 - 2020</p>
                            </div>

                            
                        </div>
                        <div className={style.social}>
                            <img src={github} alt="" />
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={discord} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
