import Image from "next/image";
import Styles from "./slide.module.scss";
import {useState} from "react";

const images = [
  "/slide/phase1.png",
  "/slide/phase2.png",
  "/slide/phase3.png",
  "/slide/phase4.png"
]

const Slide = ({className}: {className?: string}) => {
  const [offset,setOffset] = useState(0);
  return <div className={`${Styles.wrapper} ${className}`}>
    <button className={Styles.prev} onClick={()=>setOffset((prev)=>{
      prev -= 1;
      if (prev < 0) prev = images.length -1;
      return prev;
    })}>&lt;</button>
    <div className={Styles.container} style={{left: `${offset*-100}%`}}>
      {images.map((url)=>{
        return <Image src={url} alt={""} width={1920} height={1080} key={url}/>
      })}
    </div>
    <button className={Styles.next} onClick={()=>setOffset((prev)=>{
      prev += 1;
      if (prev >= images.length) prev =0;
      return prev;
    })}>&gt;</button>
  </div>
}

export {Slide}