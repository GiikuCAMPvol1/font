import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";

export default function Home() {
  let ProblemTitle: String = "りんごと出力";

  return <div className={styles.TitleArea}>{ProblemTitle}</div>;
}
