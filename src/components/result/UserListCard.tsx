import Styles from "@/components/result/UserListCard.module.scss";
import { useState } from "react";
import JoinUser from "../lobby/JoinUser";
// import JoinUser from "./JoinUser";

type props = {
  className?: string;
};

const UserListCard = ({ className }: props) => {
  // 参加できる人の数に応じてユーザーの配列データを書き換える
  const dummyData = [
    {
      userId: "0",
      userName: "ホスト",
    },
    {
      userId: "1",
      userName: "参加者1",
    },
    {
      userId: "2",
      userName: "参加者2",
    },
  ];
  const [joinUserArr, setJoinUserArr] = useState(dummyData);

  // Todo:部屋に参加者が入ってきたときの処理

  // Todo部屋から参加者が出て行ったときの処理

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      {joinUserArr.map((data, index) => (
        <div key={index}>
          <JoinUser userId={data.userId} userName={data.userName} />
        </div>
      ))}
    </div>
  );
};

export { UserListCard };
