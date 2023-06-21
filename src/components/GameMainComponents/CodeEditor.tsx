import { ChangeEvent } from "react";
import styles from "@/styles/GameMainStyles/CodeEditor.module.css";
import { useRecoilValue, useRecoilState } from "recoil";
import { gameState, uuidState } from "@/recoil/socket";
import { answerCodeState } from "@/recoil/answers";
import { getUserByUserId } from "@/utils/user";
import { getLastAnswerFromProblem } from "@/utils/problem";

const CodeEditor = () => {
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);
  const userId = useRecoilValue(uuidState);
  const game = useRecoilValue(gameState);
  const user = getUserByUserId(game, userId);

  const lastAnswer = getLastAnswerFromProblem(game.problems[user.problemId]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setAnswerCode(event.target.value);
  };

  const createMarkup = (text: string) => {
    return { __html: text.replace(/\n/g, "<br>") };
  };

  return (
    <div className={styles.CodeEditor}>
      {game.phase === "code"
        ? lastAnswer.type === "read" && (
            <textarea
              className={styles.textarea}
              value={answerCode}
              onChange={handleChange}
            ></textarea>
          )
        : lastAnswer.type === "code" && (
            <div
              className={styles.answerarea}
              dangerouslySetInnerHTML={createMarkup(lastAnswer.codeAnswer)}
            ></div>
          )}
    </div>
  );
};

export default CodeEditor;
