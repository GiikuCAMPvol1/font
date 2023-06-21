import { useState, useEffect } from "react";
import styles from "@/styles/GameMainStyles/CountDown.module.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { handleAnswerClick } from "@/utils/WebsocketClient";
import { socket } from "@/pages/index";
import { answerCodeState, languageState } from "@/recoil/answers";
import { getUserByUserId } from "@/utils/user";
import { getLastAnswerFromProblem } from "@/utils/problem";

export default function CountDown() {
  const game = useRecoilValue(gameState);
  const uuid = useRecoilValue(uuidState);
  const user = getUserByUserId(game, uuid);

  const lastAnswer = getLastAnswerFromProblem(game.problems[user.problemId]);

  const codingTime = game.codingTime * 60; //プログラムを書く時の制限時間
  const readingTime = game.readingTime * 60; //回答を書く時の制限時間
  // 変動する時間の最大値を管理: nowTime
  const [nowTime, setNowTime] = useState(15);
  // 変動する時間を管理: time
  const [time, setTime] = useState(nowTime);
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);
  const [language, setLanguage] = useRecoilState(languageState);

  const nowTurn = game.turn;
  const roomId = game.roomId;
  const userId = uuid;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //時間が0になった時にターンを進める
  useEffect(() => {
    if (0 >= time) {
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
    }
  }, [time]);

  //テキスト入力とプログラム入力の制限時間を代入
  useEffect(() => {
    if (game.phase === "read") {
      //テキスト入力ターン
      setTime(readingTime);
      setNowTime(readingTime);
    } else if (game.phase === "code") {
      //プログラム入力ターン
      setTime(codingTime);
      setNowTime(codingTime);
    }
  }, [nowTurn]);

  //タイマーの時間に対する割合を代入
  const percentage = (time / nowTime) * 100;

  //上記の変数によってタイマーの表示する割合を設定
  const cycleStyle = {
    background: `conic-gradient(yellowgreen ${100 - percentage}%, white 0%)`,
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
