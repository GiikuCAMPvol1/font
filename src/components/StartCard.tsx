import { UserImg } from "@/components/UserImg";
import InputStyles from "@/styles/InputStyles.module.scss";
import Styles from "@/components/StartCard.module.scss";

const StartCard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.input}>
        <div className={Styles.icon}>
          <UserImg userId={"test"} />
        </div>
        <div>
          <p>ニックネームを選択</p>
          <input type="text" className={InputStyles.InputText} />
        </div>
      </div>
    </div>
  );
};

export { StartCard };
