import { UserImg } from '../UserImg';
import Styles from "@/components/lobby/JoinUser.module.scss";

type Props = {
  userId: string,
  userName: string,
}

const JoinUser = ({userId, userName}: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.userImg}>
        <UserImg userId={userId}/>
      </div>
      <p className={Styles.userName}>{userName}</p>
    </div>
  )
}

export default JoinUser