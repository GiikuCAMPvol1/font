import { HTMLIcon } from "@/assets/HTMLIcon";
import GameSettingCard from "@/components/lobby/GameSettingCard";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/lobby/UserListCard";
import Styles from "@/styles/Lobby.module.scss";

export default function Lobby() {
  // Todo:招待ボタンを押したときの処理
  const InviteClick = () => {
    console.log('Click Invite');
  };

  // Todo:開始ボタンを押したときの処理
  const StartClick = () => {
    console.log('Click Start');
  };
  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard}/>
        <div>
          <GameSettingCard className={Styles.gameSettingCard}/>
          <div className={Styles.btnBox}>
            <LobbyBtn
              onClick={InviteClick}
              src={"/game/Invite.png"}
              alt={"招待アイコン"}
              text={"招待"}
            />
            <LobbyBtn
              onClick={StartClick}
              src={"/game/Start.png"}
              alt={"開始アイコン"}
              text={"開始"}
            />
          </div>
        </div>
      </div>
    </>
  )
};