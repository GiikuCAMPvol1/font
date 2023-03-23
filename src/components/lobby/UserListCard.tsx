import Styles from "@/components/lobby/UserListCard.module.scss";
import { useState } from "react";
import { dummyUserData } from "../dummyUserData";
import JoinUser from "./JoinUser";

const UserList = () => {
  // 参加できる人の数
  const [userCnt, setUserCnt] = useState(5)
  // 現在参加している人の数
  const [crrUserCnt, setCrrUserCnt] = useState(1)

  // Todo:useEffectで現在参加している人の数を変化させる処理を記載

  // Todo:参加できる人の数に応じてユーザーの配列データを書き換える(現在はdummyUserDataで処理)


  return (
    <div className={Styles.wrapper}>
      <select className={Styles.userCnt} name="プレイヤー人数">
        <option onClick={() => setUserCnt(2)} value="2プレイヤー">2プレイヤー</option>
        <option onClick={() => setUserCnt(3)} value="3プレイヤー">3プレイヤー</option>
        <option onClick={() => setUserCnt(4)} value="4プレイヤー">4プレイヤー</option>
        <option onClick={() => setUserCnt(5)} value="5プレイヤー" selected>5プレイヤー</option>
      </select>
      
      {dummyUserData.map( data => 
        <div key={data.userId}>
          <JoinUser
            userId={data.userId}
            userName={data.userName}
          />
        </div>
      )}
    </div>
  )
}

export { UserList }