import { gameState, uuidState } from "@/recoil/socket";
import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";
import { useRecoilState } from "recoil";

const ProblemTitle = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [uuid, setUuid] = useRecoilState(uuidState);
  const userIdIndex = game.users.findIndex((user) => user.userId === uuid);
  const nextUserIdIndex =
    userIdIndex === game.users.length - 1 ? 0 : userIdIndex + 1;
  return (
    <div className={styles.TitleArea}>
      {/* ターン1の最初のお題 */}
      {game.turn === 1 && game.users[userIdIndex].problem}
      {/* ターン2以降のcodeフェイズ */}
      {game.turn !== 1 &&
        game.phase === "code" &&
        game.users[nextUserIdIndex].answers[game.turn - 1].answerCode}
      {/* ターン2以降のreadフェイズ */}
      {game.turn !== 1 && game.phase === "read" && "このコードを説明せよ"}
    </div>
  );
};

export default ProblemTitle;
