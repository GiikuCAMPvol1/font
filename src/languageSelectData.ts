import jsImage from "../public/GameMainImages/js.png";
import pythonImage from "../public/GameMainImages/python.png";
import cImage from "../public/GameMainImages/c++.png";
import javaImage from "../public/GameMainImages/java.png";
import phpImage from "../public/GameMainImages/php.png";
import rubyImage from "../public/GameMainImages/ruby.png";
import goImage from "../public/GameMainImages/go.png";
import { StaticImageData } from "next/image";

type ImageData = {
  name: string;
  src: StaticImageData;
};

export const languageSelectData: ImageData[] = [
  { name: "JavaScript", src: jsImage },
  { name: "Python", src: pythonImage },
  { name: "C", src: cImage },
  { name: "Java", src: javaImage },
  { name: "PHP", src: phpImage },
  { name: "Ruby", src: rubyImage },
  { name: "Go", src: goImage },
];
