import { UserImg } from '../UserImg';
import Styles from "@/components/lobby/NullUser.module.scss";

const NullUser = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.userImg}>
        <UserImg userId={"null"}/>
      </div>
      <p className={Styles.userName}>空</p>
    </div>
  )
}

export default NullUser