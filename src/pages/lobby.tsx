import { HTMLIcon } from "@/assets/HTMLIcon";
import GameSettingCard from "@/components/lobby/GameSettingCard";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/lobby/UserListCard";
import Styles from "@/styles/Lobby.module.scss";

export default function Lobby() {
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
            <LobbyBtn/>
            <LobbyBtn/>
          </div>
        </div>
      </div>
    </>
  )
};