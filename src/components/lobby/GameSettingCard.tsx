import Styles from "@/components/lobby/GameSettingCard.module.scss";
import { ChangeEvent, useState } from "react";
import { Dispatch, SetStateAction } from "react"
import SettingBlock from "./SettingBlock";

type Props = {
  className?: string,
  difficulty: number,
  setDifficulty: Dispatch<SetStateAction<number>>,
  answerInputTime: number,
  setAnswerInputTime: Dispatch<SetStateAction<number>>,
  codeInputTime: number,
  setCodeInputTime: Dispatch<SetStateAction<number>>,

};

const GameSettingCard = ({ className, difficulty, setDifficulty, answerInputTime, setAnswerInputTime, codeInputTime, setCodeInputTime }: Props) => {
  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.valueAsNumber);
  }
  const difficultyValueText = ["Easy", "Normal", "Hard"]

  const handleChangeAnswerInputTime = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswerInputTime(event.target.valueAsNumber);
  }
  const answerInputTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChangeCodeInputTime = (event: ChangeEvent<HTMLInputElement>) => {
    setCodeInputTime(event.target.valueAsNumber);
  }
  const codeInputTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <SettingBlock
        title={"レベル"}
        src={"/game/difficulty.png"}
        crrValue={difficultyValueText[difficulty]}
        stepMaxNum={difficultyValueText.length - 1}
        setting={difficulty}
        setSetting={setDifficulty}
        onChange={handleChangeDifficulty}
      />
      <SettingBlock
        title={"回答時間"}
        src={"/game/time.png"}
        crrValue={answerInputTimeValueText[answerInputTime]}
        stepMaxNum={answerInputTimeValueText.length - 1}
        setting={answerInputTime}
        setSetting={setAnswerInputTime}
        onChange={handleChangeAnswerInputTime}
      />
      <SettingBlock
        title={"記載時間"}
        src={"/game/time.png"}
        crrValue={codeInputTimeValueText[codeInputTime]}
        stepMaxNum={codeInputTimeValueText.length - 1}
        setting={codeInputTime}
        setSetting={setCodeInputTime}
        onChange={handleChangeCodeInputTime}
      />
    </div>
  );
};

export default GameSettingCard;
