import { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import styles from "./PreLoader.module.css";

const PreLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let timer;
    if (isCompleted) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [isCompleted]);

  return (
    <div className={`${styles.typewriterContainer} ${isVisible ? '' : styles.hidden}`}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, I'm Kartik")
            .pauseFor(150)
            .deleteAll()
            .typeString("Welcome!")
            .start()
            .callFunction(() => {
              setIsCompleted(true);
            });
        }} 
      />
    </div>
  );
};

export default PreLoader;
