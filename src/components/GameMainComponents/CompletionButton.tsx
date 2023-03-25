import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAtom } from 'jotai';
import { turnAtom } from '@/atom/turnAtom';
import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";

export default function CompletionButton() {

  const [turnState, setTurnState] = useAtom(turnAtom);
  const [maxturnState, setMaxTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;
  const { maxTurn } = maxturnState;

  const nowTurnRef = useRef(nowTurn);

  useEffect(() => {
    nowTurnRef.current = nowTurn;
  }, [nowTurn]);

  const Completionfunk = useCallback(() => {
    if(nowTurnRef.current < maxTurn){
      console.log("turn")
      setTurnState((prevState) => ({ ...prevState, nowTurn: prevState.nowTurn + 1 }));
    }else{
      //全てのターンが終わった時の処理

    }
  }, [maxTurn,setTurnState]);

  return (
    <div className={styles.CompletionButtonArea} onClick={Completionfunk}>
      <Image src={CheckImage} alt="CheckImage" className={styles.CheckImage} />
      <p className={styles.CompletionText}>完了！</p>
    </div>
  );
}
