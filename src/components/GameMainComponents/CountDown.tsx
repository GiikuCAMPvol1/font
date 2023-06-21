import { useState, useEffect } from "react";
import styles from "@/styles/GameMainStyles/CountDown.module.css";
import { useRecoilValue } from "recoil";
import { gameState } from "@/recoil/socket";

function CountDown() {
  const game = useRecoilValue(gameState);
  const nowTurn = game.turn;

  const codingTime = game.codingTime * 60; //プログラムを書く時の制限時間
  const readingTime = game.readingTime * 60; //回答を書く時の制限時間
  // 変動する時間の最大値を管理: nowTime
  const [nowTime, setNowTime] = useState(15);
  // 変動する時間を管理: time
  const [time, setTime] = useState(nowTime);

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
      //時間が0になった時の処理
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

export { CountDown };
