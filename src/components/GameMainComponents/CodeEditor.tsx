import React, { useState, ChangeEvent, useEffect } from "react";
import { useAtom } from 'jotai';
import { turnAtom } from '@/atom/turnAtom';
import styles from "@/styles/GameMainStyles/CodeEditor.module.css";

export default function CodeEditor() {
  const [text, setText] = useState<string>("");
  const [turnState, setTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;

  //テキストエリアの値取得
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  return (
    <div className={styles.CodeEditor}>
      {nowTurn % 2 === 1 ?
        <textarea
          className={styles.textarea}
          value={text}
          onChange={handleChange}
        ></textarea>
      :
        <div className={styles.answerarea}>{text}</div>
      }
    </div>
  );
}
