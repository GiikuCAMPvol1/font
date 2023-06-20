import Styles from "@/Styles/GameMainStyles/UsersState.module.css";
import { UserImg } from "@/components/UserImg";
import { useAtomValue } from "jotai";
import { userListAtom } from "@/atom/RoomAtom";
import { CheckIcon } from "@/assets/CheckIcon";
import { useRecoilState } from "recoil";
import { gameState } from "@/recoil/socket";

export default function UsersState() {
  const [game, setGame] = useRecoilState(gameState);
  const userList = game.users;

  return (
    <div className={Styles.UsersStateArea}>
      {userList.map((user) => (
        <div className={Styles.ImgSize} key={user.userId}>
          <UserImg userId={user.username} />
          {user.answerCheck && <CheckIcon className={Styles.check} />}
        </div>
      ))}
    </div>
  );
}
