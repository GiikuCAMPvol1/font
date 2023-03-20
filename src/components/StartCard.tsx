import { UserImg } from "@/components/UserImg";
import InputStyles from "@/styles/InputStyles.module.scss";
import Styles from "@/components/StartCard.module.scss";
import { useState } from "react";

type props = {
  className?: string;
};

const StartCard = ({ className }: props) => {
  const [userName, setUserName] = useState("");
  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <div className={Styles.inputContainer}>
        <div className={Styles.icon}>
          <UserImg userId={userName || new Date().toLocaleTimeString()} />
        </div>
        <div className={Styles.input}>
          <p>ニックネームを選択</p>
          <input
            type="text"
            className={InputStyles.InputText}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className={Styles.buttonWrapper}>
        <button className={Styles.button}>開始</button>
      </div>
    </div>
  );
};

export { StartCard };
