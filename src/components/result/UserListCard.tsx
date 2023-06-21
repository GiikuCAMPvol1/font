import Styles from "@/components/result/UserListCard.module.scss";
import { JoinUser } from "../lobby/JoinUser";
import { roomState } from "@/recoil/socket";
import { useRecoilValue } from "recoil";

type props = {
  className?: string;
};

const UserListCard = ({ className }: props) => {
  // 参加できる人の数に応じてユーザーの配列データを書き換える
  const room = useRecoilValue(roomState);

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      {room.users.map((user, index) => (
        <div key={index}>
          <JoinUser userName={user.username} />
        </div>
      ))}
    </div>
  );
};

export { UserListCard };
