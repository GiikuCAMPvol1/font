import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";
import { handleAnswerClick } from "@/utils/WebsocketClient";
import { useRecoilValue } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import { answerCodeState, languageState } from "@/recoil/answers";

function CompletionButton() {
  const answerCode = useRecoilValue(answerCodeState);
  const language = useRecoilValue(languageState);
  const game = useRecoilValue(gameState);
  const uuid = useRecoilValue(uuidState);
  const roomId = game.roomId;
  const userId = uuid;

  return (
    <div
      className={styles.CompletionButtonArea}
      onClick={() =>
        handleAnswerClick({ socket, roomId, userId, answerCode, language })
      }
    >
      <Image src={CheckImage} alt="CheckImage" className={styles.CheckImage} />
      <p className={styles.CompletionText}>完了！</p>
    </div>
  );
}

export { CompletionButton };
