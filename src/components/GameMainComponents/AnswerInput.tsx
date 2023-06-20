import { ChangeEvent } from "react";
import styles from "@/styles/GameMainStyles/AnswerInput.module.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { answerCodeState } from "@/recoil/answers";

function AnswerInput() {
  const [answerCode, setAnswerCode] = useRecoilState(answerCodeState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAnswerCode(event.target.value);
  };

  return (
    <div className={styles.AnswerInputArea}>
      <input
        type="text"
        placeholder="ここに回答を入力"
        className={styles.AnswerInput}
        value={answerCode}
        onChange={handleChange}
      />
    </div>
  );
}

export default AnswerInput;
