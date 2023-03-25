import Styles from "@/components/lobby/UserListCard.module.scss";
import { useEffect, useState } from "react";
import JoinUser from "./JoinUser";
import NullUser from "./NullUser";

type props = {
  className?: string;
};

const UserListCard = ({ className }: props) => {
  // 参加できる人の数
  const [userCnt, setUserCnt] = useState(5);

  // 現在参加している人の数を変化させる処理
  // Todo:名前の変更と親コンポーネントでのprops化
  // 最初のユーザ配列データ
  const makeFirstUser = [{ userId: "uuid", userName: "部屋作成した人" }];
  // 参加できる人の数に応じてユーザーの配列データを書き換える
  const [joinUserArr, setJoinUserArr] = useState(makeFirstUser)
  useEffect(() => {
    // userCntがjoinUserArrより小さい場合、余分なオブジェクトを取り除く処理
    let newJoinArr;
    if (userCnt < joinUserArr.length) {
      newJoinArr = joinUserArr.slice(0, userCnt);
    } else {
      newJoinArr = joinUserArr;
    }
    setJoinUserArr(newJoinArr);
  }, [userCnt]);

  // Todo:部屋に参加者が入ってきたときの処理
  

  // Todo部屋から参加者が出て行ったときの処理


  // NullUserコンポーネントを複数回レンダリングする処理
  const nullUserCount = userCnt - joinUserArr.length;

  const nullUsers = [];
  for (let i = 0; i < nullUserCount; i++) {
    nullUsers.push(<NullUser key={i} />);
  }

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <select
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

      {joinUserArr.map((data, index) => (
        <div key={index}>
          <JoinUser
            userId={data.userId}
            userName={data.userName}
          />
        </div>
      ))}
      {nullUsers}
    </div>
  );
};

export { UserListCard };
