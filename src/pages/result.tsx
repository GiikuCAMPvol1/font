import { HTMLIcon } from "@/assets/HTMLIcon"
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/result/UserListCard";
import ResultCard from "@/components/result/ResultCard";
import Styles from "@/styles/Lobby.module.scss";

const result = () => {
  // Todo:開始ボタンを押したときの処理
  const StartClick = () => {
    console.log("Click Start");
  };

  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard} />
        <div>
          <ResultCard/>
          <div className={Styles.btnBox}>
            <div></div>
            <LobbyBtn
              onClick={StartClick}
              src={"/game/Start.png"}
              alt={"開始アイコン"}
              text={"開始"}
            />
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default result