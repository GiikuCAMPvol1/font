
import React, { useState, ChangeEvent } from "react";
import { useAtom } from 'jotai';
import styles from "@/styles/GameMainStyles/CodeEditor.module.css";

export default function CodeEditor() {
  const [text, setText] = useState<string>("");
  const [turnState, setTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  const createMarkup = (text: string) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <div className={styles.CodeEditor}>
      {nowTurn % 2 === 1 ? (
        <textarea
          className={styles.textarea}
          value={text}
          onChange={handleChange}
        ></textarea>
      :
        <div className={styles.answerarea} dangerouslySetInnerHTML={createMarkup(text)}></div>
      }
    </div>
  );
}
