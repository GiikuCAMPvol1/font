import Styles from "@/components/lobby/UserListCard.module.scss";
import { useEffect, useState } from "react";
import JoinUser from "./JoinUser";

type props = {
  className?: string;
};

const UserListCard = ({ className }: props) => {
  // 参加できる人の数
  const [userCnt, setUserCnt] = useState(5);

  // 現在参加している人の数を変化させる処理
  // 最初のユーザ配列データ
  // Todo:名前の変更と親コンポーネントでのprops化
  const arrData = Array.from({ length: userCnt }, (_, index) => {
    if (index === 0) {
      return { userId: "uuid", userName: "部屋作成した人" };
    } else {
      return { userId: "undef", userName: "空" };
    }
  });
  // Todo:参加できる人の数に応じてユーザーの配列データを書き換える
  const [joinUserArr, setJoinUserArr] = useState(arrData);

  useEffect(() => {
    let arrData2;
    if (userCnt > joinUserArr.length) {
      // userCntがjoinUserArrより大きい場合、新しいオブジェクトを追加する
      const addCount = userCnt - joinUserArr.length;
      const newObjects = Array.from({ length: addCount }, () => {
        return { userId: "undef", userName: "空" };
      });
      arrData2 = [...joinUserArr, ...newObjects];
    } else if (userCnt < joinUserArr.length) {
      // userCntがjoinUserArrより小さい場合、余分なオブジェクトを取り除く
      arrData2 = joinUserArr.slice(0, userCnt);
    } else {
      // userCntがjoinUserArrと同じ場合、joinUserArrをそのまま使用する
      arrData2 = joinUserArr;
    }
    setJoinUserArr(arrData2);
  }, [userCnt]);

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
          {index < userCnt && (
            <JoinUser userId={data.userId} userName={data.userName} />
          )}
        </div>
      ))}
    </div>
  );
};

export { UserListCard };
