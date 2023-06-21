import Styles from "@/components/lobby/UserListCard.module.scss";
import {JoinUser} from "./JoinUser";
import {NullUser} from "./NullUser";
import { roomState } from "@/recoil/socket";
import { useRecoilValue} from "recoil";

type props = {
  className?: string;
};

const userLimit = 5;

const UserListCard = ({ className }: props) => {
  const room = useRecoilValue(roomState);

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <div className={Styles.userCnt}>
        {room.users.length} / {userLimit}人
      </div>

      {room.users.map((user) => (
        <div key={user.userId}>
          <JoinUser userName={user.username} />
        </div>
      ))}
      {[...Array(userLimit - room.users.length)].map((_, id) => (
        <NullUser key={id} />
      ))}
    </div>
  );
};

export { UserListCard };
