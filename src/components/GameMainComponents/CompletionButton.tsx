import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";
import { handleAnswerClick } from "@/utils/WebsocketClient";
import { useRecoilState } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import { answerCodeState, languageState } from "@/recoil/answers";
import { useState } from "react";
import { getUserByUserId } from "@/utils/user";
import { getLastAnswerFromProblem } from "@/utils/problem";

export default function CompletionButton() {
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);
  const [language, setLanguage] = useRecoilState(languageState);
  const [game, setGame] = useRecoilState(gameState);
  const [userId, setUuid] = useRecoilState(uuidState);
  const [isClicked, setIsClicked] = useState(false);
  const roomId = game.roomId;
  const user = getUserByUserId(game, userId);

  const lastAnswer = getLastAnswerFromProblem(game.problems[user.problemId]);

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
      onClick={() => {
        if (lastAnswer.type === "code") {
          handleAnswerClick(socket, {
            type: "read",
            roomId,
            userId,
            readAnswer: answerCode,
            problemId: user.problemId,
          });
          return;
        } else {
          handleAnswerClick(socket, {
            type: "code",
            roomId,
            userId,
            codeAnswer: answerCode,
            language,
            problemId: user.problemId,
          });
        }
        setAnswerCode("");
      }}
    >
      <Image
        src={CheckImage}
        alt="CheckImage"
        className={styles.CheckImage}
        onClick={() => clickFunction()}
      />
      <p className={styles.CompletionText}>完了！</p>
    </div>
  );
}
