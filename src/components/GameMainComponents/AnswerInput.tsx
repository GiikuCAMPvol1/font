import React, { useState, ChangeEvent } from "react";
import styles from "@/styles/GameMainStyles/AnswerInput.module.css";

function AnswerInput() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.AnswerInputArea}>
      <input
        type="text"
        placeholder="ここに回答を入力"
        className={styles.AnswerInput}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default AnswerInput;
