import styles from "@/styles/GameMainStyles/ProblemTitle.module.css";
import {useRecoilValue} from "recoil";
import {gameState, uuidState} from "@/recoil/socket";

const ProblemTitle = () => {
  const game = useRecoilValue(gameState);
  const userId = useRecoilValue(uuidState);

  if (!game) return <></>;

  return (
    <div className={styles.TitleArea}>
      {game.phase === "code" ? game.users.filter((item)=>item.userId === userId)[0].problem : "このコードを説明せよ"}
    </div>
  );
};

export {ProblemTitle};
