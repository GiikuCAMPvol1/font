import Styles from "@/Styles/GameMainStyles/UsersState.module.css";
import { UserImg } from "@/components/UserImg";
import { CheckIcon } from "@/assets/CheckIcon";
import { useRecoilValue} from "recoil";
import { gameState } from "@/recoil/socket";

function UsersState() {
  const game = useRecoilValue(gameState);
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

export {UsersState};