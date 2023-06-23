import { useState, useEffect } from "react";
import styles from "@/styles/GameMainStyles/LanguageSelect.module.css";
import Image from "next/image";

import { languageState } from "@/recoil/answers";
import { useRecoilState } from "recoil";
import { languageSelectData } from "@/languageSelectData";

function LanguageSelect() {
  const [language, setLanguage] = useRecoilState(languageState);

  const images = languageSelectData;

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
