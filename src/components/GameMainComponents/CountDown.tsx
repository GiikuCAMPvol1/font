// Home.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/GameMainStyles/CountDown.module.css";

export default function Home() {
  const totalTime = 60;
  const [time, setTime] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const percentage = (time / totalTime) * 100;
  const cycleStyle = {
    background: `conic-gradient(red ${100 - percentage}%, white 0%)`,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };

  return (
    <div className={styles.CountDownArea}>
      <div className={styles.cycle} style={cycleStyle}></div>
      <div className={styles.time}>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </div>
    </div>
  );
}
