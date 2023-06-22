import Styles from "@/components/lobby/GameSettingCard.module.scss";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import SettingBlock from "./SettingBlock";
import { useRecoilState } from "recoil";
import {
  codingTimeState,
  difficultyState,
  readingTimeState,
} from "@/recoil/gameSettings";

type Props = {
  className?: string;
  disabled?: boolean;
};

const GameSettingCard = ({ className, disabled }: Props) => {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);
  const [readingTime, setReadingTime] = useRecoilState(readingTimeState);
  const [codingTime, setCodingTime] = useRecoilState(codingTimeState);
  const difficultyValueText = ["easy", "normal", "hard"];
  const readingTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const codingTimeValueText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(difficultyValueText[event.target.valueAsNumber]);
  };

  const handleChangeReadingTime = (event: ChangeEvent<HTMLInputElement>) => {
    setReadingTime(event.target.valueAsNumber);
  };

  const handleChangeCodingTime = (event: ChangeEvent<HTMLInputElement>) => {
    setCodingTime(event.target.valueAsNumber);
  };

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <SettingBlock
        disabled={disabled}
        title={"レベル"}
        src={"/game/difficulty.png"}
        crrValue={difficulty}
        stepMaxNum={difficultyValueText.length - 1}
        setting={difficultyValueText.indexOf(difficulty)}
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
