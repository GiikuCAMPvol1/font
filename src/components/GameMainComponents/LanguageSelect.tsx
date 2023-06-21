import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom/languageAtom";
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

interface ImageData {
  id: number;
  src: StaticImageData;
  alt: string;
}

function LanguageSelect() {
  const [selectedImageId, setSelectedImageId] = useState<number>(1);
  const [languageState, setLanguageState] = useAtom(languageAtom);
  const { thisLanguage } = languageState;

  const images: ImageData[] = [
    { id: 1, src: jsImage, alt: "Image 1" },
    { id: 2, src: pythonImage, alt: "Image 2" },
    { id: 3, src: cImage, alt: "Image 3" },
    { id: 4, src: javaImage, alt: "Image 4" },
    { id: 5, src: phpImage, alt: "Image 5" },
    { id: 6, src: rubyImage, alt: "Image 6" },
    { id: 7, src: goImage, alt: "Image 7" },
  ];

  const handleImageClick = (id: number) => {
    setSelectedImageId(id);
  };

  useEffect(() => {
    setLanguageState((prevState) => ({
      ...prevState,
      thisLanguage: selectedImageId - 1,
    })); // 使用方法が配列の添字に使うため -1
  }, [selectedImageId, setLanguageState]);

  return (
    <div className={styles.LanguageSelectArea}>
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() => handleImageClick(image.id)}
          style={{opacity: image.id===selectedImageId?1:0.4}}
        >
          <Image src={image.src} alt={image.alt} className={styles.Images} />
        </div>
      ))}
    </div>
  );
}

export {LanguageSelect};
