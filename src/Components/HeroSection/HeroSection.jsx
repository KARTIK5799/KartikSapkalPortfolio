import style from './HeroSection.module.css';
import NavBar from './NavBar/NavBar';
import PlanetSetup from './PlanetSetup/PlanetSetup';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvPath = 'src/assets/kartik_resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.setAttribute('download', 'kartik_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailMe = () => {
    const email = 'kartiksapkal5799@gmail.com';
    const subject = 'Invitation to Join [Company Name] as a Frontend Developer';
    const body = `Dear kartik,

    I hope this message finds you in good spirits.

I am writing to extend an invitation to join our team at [Company Name] as a Frontend Developer. After reviewing your impressive portfolio and considering your expertise in frontend development, we are eager to bring you on board to contribute to our projects.

Your experience and skills in frontend development, as demonstrated by your projects such as [mention specific projects if applicable], align closely with the needs of our team. We believe that your creativity, attention to detail, and dedication to delivering exceptional user experiences make you an ideal candidate for this role.

As part of our team, you will have the opportunity to work on exciting projects and collaborate with talented individuals who are passionate about leveraging technology to create innovative solutions. We are confident that your contributions will greatly benefit our team and help us achieve our goals.

We offer a dynamic work environment, opportunities for growth and development, and competitive compensation. We are excited about the prospect of having you join us and are confident that you will thrive in our team.

If you are interested in discussing this opportunity further or have any questions, please don't hesitate to reach out to me at [Your Phone Number] or via email at [Your Email Address]. We would be happy to schedule a meeting to provide more details about the position and answer any questions you may have.

Thank you for considering this opportunity with us. We look forward to the possibility of working together and are excited about the value you will bring to our team.

Warm regards,

[Your Name]
[Your Position]
[Company Name]
[Your Phone Number]
[Your Email Address]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <NavBar />
      <div className={style.heroSection} id='home'>
        <PlanetSetup />
        <div className={style.heroText}>
          <h1>
            <span className={`${style.hello} ${style.gradientText}`}>Hello!</span> <br/>I am  <span className={`${style.name} ${style.gradientText}`}>Kartik Sapkal </span>
          </h1>
          <p>Software Developer</p>
          <div className={style.buttons}>
            <button className={style.button1} onClick={handleDownloadCV}>Download CV</button>
            <button className={style.button2} onClick={handleEmailMe}>Email me</button>
          </div>
          <div className={style.downIcon}>
            <span className='material-symbols-outlined'>expand_circle_down</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
