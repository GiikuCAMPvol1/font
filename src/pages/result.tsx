import { HTMLIcon } from "@/assets/HTMLIcon";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/result/UserListCard";
import ResultCard from "@/components/result/ResultCard";
import Styles from "@/styles/Lobby.module.scss";
import { useRecoilState } from "recoil";
import { gameState, roomState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import { handleUpdateResultClick } from "@/utils/WebsocketClient";

export type ResultOpen = {
  type: string;
  data: string;
  userId: string;
  username: string;
}[];

const Result = () => {
  const [game, setGame] = useRecoilState(gameState);
  const [room, setRoom] = useRecoilState(roomState);
  const [uuid, setUuid] = useRecoilState(uuidState);

  // 結果画面更新のレスポンス
  socket.on(`res_updateResult_${game.roomId}`, (data) => {
    setGame(data);
  });

  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard} />
        <div>
          <ResultCard />
          <div className={Styles.btnBox}>
            {uuid === room.ownerId && (
              <LobbyBtn
                onClick={() =>
                  handleUpdateResultClick(socket, {
                    roomId: game.roomId,
                    turn: game.turn,
                  })
                }
                src={"/game/Start.png"}
                alt={"次のゲームアイコン"}
                text={"次へ"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
