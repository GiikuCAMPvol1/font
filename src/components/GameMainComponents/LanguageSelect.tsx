import { useState, useEffect } from "react";
import styles from "@/styles/GameMainStyles/LanguageSelect.module.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import jsImage from "../../../public/GameMainImages/js.png";
import pythonImage from "../../../public/GameMainImages/python.png";
import cImage from "../../../public/GameMainImages/c++.png";
import javaImage from "../../../public/GameMainImages/java.png";
import phpImage from "../../../public/GameMainImages/php.png";
import rubyImage from "../../../public/GameMainImages/ruby.png";
import goImage from "../../../public/GameMainImages/go.png";
import { languageState } from "@/recoil/answers";
import { useRecoilState } from "recoil";

interface ImageData {
  name: string;
  src: StaticImageData;
}

function LanguageSelect() {
  const [language, setLanguage] = useRecoilState(languageState);

  const images: ImageData[] = [
    { name: "js", src: jsImage },
    { name: "python", src: pythonImage },
    { name: "c", src: cImage },
    { name: "java", src: javaImage },
    { name: "php", src: phpImage },
    { name: "ruby", src: rubyImage },
    { name: "go", src: goImage },
  ];

  const imageStyle = (name: string) => ({
    opacity: name === language ? 1 : 0.4,
  });

  const handleImageClick = (name: string) => {
    setLanguage(name);
  };

  return (
    <div className={styles.LanguageSelectArea}>
      {images.map((image) => (
        <div
          key={image.name}
          onClick={() => handleImageClick(image.name)}
          style={imageStyle(image.name)}
        >
          <Image src={image.src} alt={image.name} className={styles.Images} />
        </div>
      ))}
    </div>
  );
}

export default LanguageSelect;
