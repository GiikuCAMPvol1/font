import Image from "next/image";
import Styles from "@/components/lobby/SettingBlock.module.scss";
import { ChangeEvent } from "react";

type Props = {
  title: string;
  src: string;
  crrValue: string | number;
  stepMaxNum: number;
  setting: number | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const SettingBlock = ({
  title,
  src,
  crrValue,
  stepMaxNum,
  setting,
  onChange,
  disabled
}: Props) => {
  return (
    <div className={Styles.settingBlock}>
      <div className={Styles.titleWrapper}>
        {title}
        <Image src={src} alt={title} width={20} height={20} />
        {crrValue}
        {typeof crrValue === "number" && "分"}
      </div>

      <input
        type="range"
        min="0"
        max={stepMaxNum}
        value={setting}
        className={`${Styles.range} ${disabled && Styles.disabled}`}
        step="1"
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default SettingBlock;
