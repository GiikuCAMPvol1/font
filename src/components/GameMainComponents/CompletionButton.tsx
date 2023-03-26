import React, { useState, useEffect, useCallback, useRef } from "react";
import {useAtom, useAtomValue} from "jotai";
import { turnAtom } from "@/atom/turnAtom";
import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";
import {socketAtom} from "@/atom/socketAtom";
import {phaseAtom, phaseDataAtom} from "@/atom/PhaseAtom";

export default function CompletionButton() {
  const [turnState, setTurnState] = useAtom(turnAtom);
  const [maxturnState, setMaxTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;
  const { maxTurn } = maxturnState;
  const socket = useAtomValue(socketAtom);
  const phaseItem = useAtomValue(phaseAtom);
  const data = useAtomValue(phaseDataAtom);

  const nowTurnRef = useRef(nowTurn);

  useEffect(() => {
    nowTurnRef.current = nowTurn;
  }, [nowTurn]);

  const Completionfunk = useCallback(() => {
    if (!socket || !phaseItem)return;
    socket.endPhaseRequest(phaseItem.phase, data)
  }, [maxTurn, setTurnState]);

  return (
    <div className={styles.CompletionButtonArea} onClick={Completionfunk}>
      <Image src={CheckImage} alt="CheckImage" className={styles.CheckImage} />
      <p className={styles.CompletionText}>完了！</p>
    </div>
  );
}
