import Styles from "@/components/lobby/GameSettingCard.module.scss";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import SettingBlock from "./SettingBlock";

type Props = {
  className?: string;
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
  readingTime: number;
  setReadingTime: Dispatch<SetStateAction<number>>;
  codingTime: number;
  setCodingTime: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
};

const GameSettingCard = ({
  className,
  difficulty,
  setDifficulty,
  readingTime,
  setReadingTime,
  codingTime,
  setCodingTime,
  disabled,
}: Props) => {
  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value);
  };
  const difficultyValueText = ["Easy", "Normal", "Hard"];

  const handleChangeReadingTime = (event: ChangeEvent<HTMLInputElement>) => {
    setReadingTime(event.target.valueAsNumber);
  };
  const readingTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChangeCodingTime = (event: ChangeEvent<HTMLInputElement>) => {
    setCodingTime(event.target.valueAsNumber);
  };
  const codingTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <SettingBlock
        disabled={disabled}
        title={"レベル"}
        src={"/game/difficulty.png"}
        crrValue={difficulty}
        stepMaxNum={difficultyValueText.length - 1}
        setting={difficulty.toString()}
        onChange={handleChangeDifficulty}
      />
      <SettingBlock
        disabled={disabled}
        title={"回答時間"}
        src={"/game/time.png"}
        crrValue={readingTimeValueText[readingTime]}
        stepMaxNum={readingTimeValueText.length - 1}
        setting={readingTime}
        onChange={handleChangeReadingTime}
      />
      <SettingBlock
        disabled={disabled}
        title={"記載時間"}
        src={"/game/time.png"}
        crrValue={codingTimeValueText[codingTime]}
        stepMaxNum={codingTimeValueText.length - 1}
        setting={codingTime}
        onChange={handleChangeCodingTime}
      />
    </div>
  );
};

export default GameSettingCard;
