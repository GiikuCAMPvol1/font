import { HTMLIcon } from "@/assets/HTMLIcon";
import GameSettingCard from "@/components/lobby/GameSettingCard";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/lobby/UserListCard";
import Styles from "@/styles/Lobby.module.scss";
import { socket } from "@/pages/index";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { gameState, roomState, uuidState } from "@/recoil/socket";
import { handleStartGameClick } from "@/utils/WebsocketClient";
import { useRouter } from "next/router";
import { Slide } from "@/components/slide";
import {
  codingTimeState,
  difficultyState,
  readingTimeState,
} from "@/recoil/gameSettings";

export default function Lobby() {
  const [difficulty, setDifficulty] = useRecoilState(difficultyState);
  const [readingTime, setReadingTime] = useRecoilState(readingTimeState);
  const [codingTime, setCodingTime] = useRecoilState(codingTimeState);

  const [room, setRoom] = useRecoilState(roomState);
  const setGame = useSetRecoilState(gameState);
  const uuid = useRecoilValue(uuidState);
  const router = useRouter();

  const InviteClick = () => {
    const inviteLink = `${location.origin}/?id=${room.roomId}`;
    void navigator.clipboard?.writeText(inviteLink);
  };

  const roomId = room.roomId;
  // 他の人の参加時のレスポンス
  socket.on(roomId, (data) => {
    setRoom(data);
  });

  // ゲーム開始時のレスポンス
  socket.on(`res_gameStart_${roomId}`, (data) => {
    setGame(data);
    void router.push(`/gamemain?id=${roomId}`);
  });

  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard} />
        <div>
          {uuid === room.ownerId ? (
            <GameSettingCard
              disabled={uuid !== room.ownerId}
              className={Styles.gameSettingCard}
            />
          ) : (
            <div className={Styles.slide}>
              <Slide />
            </div>
          )}
          {/* ownerにのみ表示 */}
          {uuid === room.ownerId && (
            <div className={Styles.btnBox}>
              <LobbyBtn
                onClick={InviteClick}
                src={"/game/Invite.png"}
                alt={"招待アイコン"}
                text={"招待"}
              />
              <LobbyBtn
                onClick={() =>
                  handleStartGameClick({
                    socket,
                    roomId,
                    difficulty,
                    readingTime,
                    codingTime,
                  })
                }
                src={"/game/Start.png"}
                alt={"開始アイコン"}
                text={"開始"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
