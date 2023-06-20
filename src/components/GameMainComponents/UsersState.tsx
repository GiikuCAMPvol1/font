import Styles from "@/Styles/GameMainStyles/UsersState.module.css";
import { UserImg } from "@/components/UserImg";
import { CheckIcon } from "@/assets/CheckIcon";
import { useRecoilValue } from "recoil";
import { gameState, roomState } from "@/recoil/socket";

const UsersState = () => {
  const game = useRecoilValue(gameState);
  const room = useRecoilValue(roomState);

  return (
    <div className={Styles.UsersStateArea}>
      {room.users.map((roomUser) => (
        <div className={Styles.ImgSize} key={roomUser.userId}>
          <UserImg userId={roomUser.username} />
          {game.users[
            game.users.findIndex((user) => user.userId === roomUser.userId)
          ].answerCheck && <CheckIcon className={Styles.check} />}
        </div>
      ))}
    </div>
  );
};

export default UsersState;
