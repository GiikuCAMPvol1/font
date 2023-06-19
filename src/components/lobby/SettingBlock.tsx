import Image from "next/image";
import Styles from "@/components/lobby/SettingBlock.module.scss";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  src: string;
  crrValue: string | number;
  stepMaxNum: number;
  setting: number | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SettingBlock = ({
  title,
  src,
  crrValue,
  stepMaxNum,
  setting,
  onChange,
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
        className={Styles.range}
        step="1"
        onChange={onChange}
      />
    </div>
  );
};

export default SettingBlock;
