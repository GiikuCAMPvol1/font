import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAtom, useAtomValue } from "jotai";
import { turnAtom } from "@/atom/turnAtom";
import styles from "@/styles/GameMainStyles/CompletionButton.module.css";
import Image from "next/image";
import CheckImage from "../../../public/GameMainImages/check.png";
import { handleAnswerClick } from "@/utils/WebsocketClient";
import { useRecoilState } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import { getIndexByUserId } from "@/utils/getIndexByUserId";

export default function CompletionButton() {
  const [game, setGame] = useRecoilState(gameState);
  const [uuid, setUuid] = useRecoilState(uuidState);
  const roomId = game.roomId;
  const userId = uuid;
  const userIdIndex = getIndexByUserId(game.users, userId);
  const answerCode = game.users[userIdIndex].answers[game.turn].answerCode;
  const language = game.users[userIdIndex].answers[game.turn].language;

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
