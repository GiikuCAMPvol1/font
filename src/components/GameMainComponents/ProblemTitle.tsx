import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";
import { useRecoilValue } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { getUserByUserId } from "@/utils/user";
import { getLastAnswerFromProblem } from "@/utils/problem";

const ProblemTitle = () => {
  const game = useRecoilValue(gameState);
  const userId = useRecoilValue(uuidState);

  if (!game) return <></>;

  const user = getUserByUserId(game, userId);

  const lastAnswer = getLastAnswerFromProblem(game.problems[user.problemId]);

  return (
    <div className={styles.TitleArea}>
      {lastAnswer.type !== game.phase
        ? lastAnswer.type === "read"
          ? lastAnswer.readAnswer
          : "このコードを説明せよ"
        : "お待ち下さい..."}
    </div>
  );
};

export default ProblemTitle;
