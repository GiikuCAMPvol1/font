import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAtom } from 'jotai';
import { turnAtom } from '@/atom/turnAtom';
import styles from "@/styles/GameMainStyles/CountDown.module.css";

export default function CountDown() {
  const consoleTime = 15;//プログラムを書く時の制限時間
  const textTime = 10;//回答を書く時の制限時間
  const [nowTime, setNowTime] = useState(15)
  const [time, setTime] = useState(nowTime);
  const [turnState, setTurnState] = useAtom(turnAtom);
  const [maxturnState, setMaxTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;
  const { maxTurn } = maxturnState;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //useEffectにAtomを使用している関数を設定しても警告が出てくるため関数を別定義
  const nowTurnRef = useRef(nowTurn);

  useEffect(() => {
    nowTurnRef.current = nowTurn;
  }, [nowTurn]);


  //時間が0になった時にターンを進める
  useEffect(()=>{
    if(0 >= time){
      //時間が0になった時の処理
    }
  },[time])

  //テキスト入力とプログラム入力の制限時間を代入
  useEffect(() => {
    if (nowTurn % 2 === 0) {
      //テキスト入力ターン
      setTime(textTime);
      setNowTime(textTime);
    } else {
      //プログラム入力ターン
      setTime(consoleTime);
      setNowTime(consoleTime);
    }
  }, [nowTurn]);

  //タイマーの時間に対する割合を代入
  const percentage = (time / nowTime) * 100;

  //上記の変数によってタイマーの表示する割合を設定
  const cycleStyle = {
    background: `conic-gradient(red ${100 - percentage}%, white 0%)`,
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
