import Styles from "@/components/lobby/UserListCard.module.scss";
import { useState } from "react";
import JoinUser from "./JoinUser";
import NullUser from "./NullUser";
import {useAtomValue} from "jotai";
import {userListAtom} from "@/atom/RoomAtom";

type props = {
  className?: string;
};

const UserListCard = ({ className }: props) => {
  const [userCnt, setUserCnt] = useState(5);

  const userList = useAtomValue(userListAtom);

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <select disabled={true}
        className={Styles.userCnt}
        name="プレイヤー人数"
        onChange={(event) => setUserCnt(parseInt(event.target.value))}
        value={userCnt}
      >
        <option value={2}>2プレイヤー</option>
        <option value={3}>3プレイヤー</option>
        <option value={4}>4プレイヤー</option>
        <option value={5}>5プレイヤー</option>
      </select>

      {userList.map((user) => (
        <div key={user.userId}>
          <JoinUser userId={user.userId} userName={user.username} />
        </div>
      ))}
      {[...Array(userCnt - userList.length)].map((_,id)=>(
        <NullUser key={id}/>
      ))}
    </div>
  );
};

export { UserListCard };
