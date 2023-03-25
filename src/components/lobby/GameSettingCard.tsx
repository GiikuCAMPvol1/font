import Styles from "@/components/lobby/GameSettingCard.module.scss";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  className?: string;
  difficulty: number;
  setDifficulty: Dispatch<SetStateAction<number>>;
};

const GameSettingCard = ({ className, difficulty, setDifficulty }: Props) => {
  const handleChangeDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.valueAsNumber);
  };
  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <div className={Styles.settingBlock}>
        {"レベル"}
        <Image
          src={"/game/difficulty.png"}
          alt={"レベル"}
          width={20}
          height={20}
        />
        {"設定値"}

        <input
          type="range"
          min="0"
          max="100"
          value={difficulty}
          className={`${Styles.rangeBar} ${Styles.range} ${Styles.rangePrimary}`}
          step="25"
          onChange={handleChangeDifficulty}
        />
      </div>
    </div>
  );
};

export default GameSettingCard;
