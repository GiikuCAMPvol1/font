import { UserImg } from "../UserImg";
import Styles from "@/components/lobby/JoinUser.module.scss";

type Props = {
  userName: string;
};

const JoinUser = ({ userName }: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.userImg}>
        <UserImg userId={userName} />
      </div>
      <p className={Styles.userName}>{userName}</p>
    </div>
  );
};

export { JoinUser };
