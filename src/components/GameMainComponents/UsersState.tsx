import Styles from "@/Styles/GameMainStyles/UsersState.module.css";
import { UserImg } from "@/components/UserImg";
import { useAtomValue } from "jotai";
import { userListAtom } from "@/atom/RoomAtom";
import {CheckIcon} from "@/assets/CheckIcon";

export default function UsersState() {
  const userList = useAtomValue(userListAtom);

  return (
    <div className={Styles.UsersStateArea}>
      {userList.map((user) => (
        <div className={Styles.ImgSize} key={user.userId}>
          <UserImg userId={user.username} />
          {user.completed && <CheckIcon className={Styles.check}/>}
        </div>
      ))}
    </div>
  );
}
