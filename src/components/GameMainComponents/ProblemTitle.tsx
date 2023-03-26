import { useAtomValue } from "jotai";
import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";
import { phaseAtom } from "@/atom/PhaseAtom";

const ProblemTitle = () => {
  const phaseItem = useAtomValue(phaseAtom);

  if (!phaseItem) return <></>;

  return (
    <div className={styles.TitleArea}>
      {phaseItem.phase === "coding" ? phaseItem.data : "このコードを説明せよ"}
    </div>
  );
};

export default ProblemTitle;
