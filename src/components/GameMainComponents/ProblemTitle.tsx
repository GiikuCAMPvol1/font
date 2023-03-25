import React, { useState,useContext } from 'react';
import { useAtom } from 'jotai';
import { turnAtom } from '@/atom/turnAtom';
import { languageAtom } from '@/atom/languageAtom';
import styles from '@/styles/GameMainStyles/ProblemTitle.module.css';
import Image from "next/image";
import type { StaticImageData } from "next/image";
import jsImage from "../../../public/GameMainImages/js.png";
import pythonImage from "../../../public/GameMainImages/python.png";
import cImage from "../../../public/GameMainImages/c++.png";
import javaImage from "../../../public/GameMainImages/java.png";
import phpImage from "../../../public/GameMainImages/php.png";
import rubyImage from "../../../public/GameMainImages/ruby.png";
import goImage from "../../../public/GameMainImages/go.png";

interface ImageData {
  id: number;
  src: StaticImageData;
  alt: string;
}

const ProblemTitle = () => {
  
  const [problemTitle, setProblemTitle] = useState<string>('りんごと出力');
  const [turnState, setTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;
  const [languageState, setLanguageState] = useAtom(languageAtom);
  const { thisLanguage } = languageState;

  const images: ImageData[] = [
    { id: 1, src: jsImage, alt: 'Image 1' },
    { id: 2, src: pythonImage, alt: 'Image 2' },
    { id: 3, src: cImage, alt: 'Image 3' },
    { id: 4, src: javaImage, alt: 'Image 4' },
    { id: 5, src: phpImage, alt: 'Image 5' },
    { id: 6, src: rubyImage, alt: 'Image 6' },
    { id: 7, src: goImage, alt: 'Image 7' },
  ];

  return (
    <div className={styles.TitleArea}>
      {problemTitle}
      {nowTurn % 2 === 1 ? <Image src={images[thisLanguage].src} alt={images[thisLanguage].alt} className={styles.Images} /> : ""}
    </div>
  );
}

export default ProblemTitle;
