import React, { useState } from "react";
import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";

const ProblemTitle = () => {
  const [problemTitle, setProblemTitle] = useState<string>("りんごと出力");

  return <div className={styles.TitleArea}>{problemTitle}</div>;
};

export default ProblemTitle;
