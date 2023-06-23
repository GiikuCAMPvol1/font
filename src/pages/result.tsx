import { HTMLIcon } from "@/assets/HTMLIcon";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/result/UserListCard";
import ResultCard from "@/components/result/ResultCard";
import Styles from "@/styles/Lobby.module.scss";
import { useRecoilState } from "recoil";
import { gameState, roomState, uuidState } from "@/recoil/socket";
import { socket } from "@/pages/index";
import {
  handleHomeResetClick,
  handleRestartClick,
  handleUpdateResultClick,
} from "@/utils/WebsocketClient";
import { useRouter } from "next/router";

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
  const router = useRouter();

  // 結果画面更新のレスポンス
  socket.on(`res_updateResult_${game.roomId}`, (data) => {
    setGame(data);
  });

  // リスタートのレスポンス: リスタートしたらロビーに戻る
  socket.on(`res_restart_${game.roomId}`, (data) => {
    router.push(`/lobby?id=${data.roomId}`);
  });

  // ホームリセットのレスポンス: ホームリセットしたらホームに戻る
  socket.on(`res_homeReset_${game.roomId}`, (data) => {
    router.push(`/`);
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

          {uuid === room.ownerId &&
            (game.turn !== game.users.length ? (
              <div className={Styles.btnBox}>
                <LobbyBtn
                  onClick={() =>
                    handleUpdateResultClick(socket, {
                      roomId: game.roomId,
                      turn: game.turn,
                    })
                  }
                  src={"/game/Start.png"}
                  alt={"ネクストアイコン"}
                  text={"次へ"}
                />
              </div>
            ) : (
              <div className={Styles.btnBox}>
                <LobbyBtn
                  onClick={() =>
                    handleHomeResetClick(socket, {
                      roomId: game.roomId,
                    })
                  }
                  src={"/game/Start.png"}
                  alt={"ホームアイコン"}
                  text={"ホームへ"}
                />
                <LobbyBtn
                  onClick={() =>
                    handleRestartClick(socket, {
                      roomId: game.roomId,
                    })
                  }
                  src={"/game/Start.png"}
                  alt={"スタートアイコン"}
                  text={"スタート"}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Result;
