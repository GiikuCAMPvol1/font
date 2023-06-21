import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";
import { handleAnswerClick } from "@/utils/WebsocketClient";
import { useRecoilState } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import { answerCodeState, languageState } from "@/recoil/answers";
import { useState } from "react";

export default function CompletionButton() {
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);
  const [language, setLanguage] = useRecoilState(languageState);
  const [game, setGame] = useRecoilState(gameState);
  const [uuid, setUuid] = useRecoilState(uuidState);
  const [isClicked, setIsClicked] = useState(false);
  const roomId = game.roomId;
  const userId = uuid;

  const clickFunction = () => {
    if (isClicked) {
      alert("すでに回答しています。");
    } else {
      setIsClicked(true);
    }
  };

  return (
    <div
      className={styles.CompletionButtonArea}
      onClick={() =>
        handleAnswerClick({ socket, roomId, userId, answerCode, language })
      }
    >
      <Image
        src={CheckImage}
        alt="CheckImage"
        className={styles.CheckImage}
        onClick={() => clickFunction()}
        width={138}
        height={48}
      />
      <p className={styles.CompletionText}>完了！</p>
    </div>
  );
}
