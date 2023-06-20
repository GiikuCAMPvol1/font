import { ChangeEvent } from "react";
import styles from "@/styles/GameMainStyles/CodeEditor.module.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { gameState } from "@/recoil/socket";
import { answerCodeState } from "@/recoil/answers";

const CodeEditor = () => {
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);
  const game = useRecoilValue(gameState);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setAnswerCode(event.target.value);
  };

  const createMarkup = (text: string) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <div className={styles.CodeEditor}>
      {game.phase === "code" ? (
        <textarea
          className={styles.textarea}
          value={answerCode}
          onChange={handleChange}
        ></textarea>
      ) : (
        <div
          className={styles.answerarea}
          dangerouslySetInnerHTML={createMarkup(answerCode)}
        ></div>
      )}
    </div>
  );
};

export default CodeEditor;
