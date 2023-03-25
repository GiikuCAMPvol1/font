import { UserImg } from "@/components/UserImg";
import InputStyles from "@/styles/InputStyles.module.scss";
import Styles from "@/components/index/StartCard.module.scss";
import { useState } from "react";
import { generateUuid } from "@/utils/uuid";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";

type props = {
  className?: string;
};

const StartCard = ({ className }: props) => {
  const [userName, setUserName] = useState("");
  const [uuid, setUuid] = useState("");
  const isomorphicEffect = useIsomorphicEffect();
  isomorphicEffect(() => {
    setUuid(generateUuid());
  }, []);

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <div className={Styles.inputContainer}>
        <div className={Styles.icon}>
          <div id={uuid}></div>
          <UserImg userId={userName || uuid} />
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
