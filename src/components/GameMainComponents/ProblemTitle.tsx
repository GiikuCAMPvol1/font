import React, { useState,useContext } from 'react';
import styles from '@/styles/GameMainStyles/ProblemTitle.module.css';
import TurnContext from '@/context/TurnContext';
import Image from "next/image";
import type { StaticImageData } from "next/image";
import jsImage from "../../../public/GameMainImages/js.png";
import pythonImage from "../../../public/GameMainImages/python.png";
import cImage from "../../../public/GameMainImages/c++.png";
import javaImage from "../../../public/GameMainImages/java.png";
import phpImage from "../../../public/GameMainImages/php.png";
import rubyImage from "../../../public/GameMainImages/ruby.png";
import goImage from "../../../public/GameMainImages/go.png";

const ProblemTitle = () => {
  
  const [problemTitle, setProblemTitle] = useState<string>('りんごと出力');
  const { nowTurn } = useContext(TurnContext);

  return (
    <div className={styles.TitleArea}>
      {problemTitle}
      {/* <Image src={image.src} alt={image.alt} className={styles.Images} /> */}
    </div>
  );
}

export default ProblemTitle;
