import React, { useState, ChangeEvent } from "react";
import styles from "@/styles/GameMainStyles/CodeEditor.module.css";

export default function CodeEditor() {
  const [text, setText] = useState<string>('');

  //テキストエリアの値取得
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  return (
    <div className={styles.CodeEditor}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
