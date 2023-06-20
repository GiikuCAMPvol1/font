import { HTMLIcon } from "@/assets/HTMLIcon";
import GameSettingCard from "@/components/lobby/GameSettingCard";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/lobby/UserListCard";
import Styles from "@/styles/Lobby.module.scss";
import { useState } from "react";
import { socket } from "@/pages/index";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { gameState, roomState, uuidState } from "@/recoil/socket";
import { handleStartGameClick } from "@/utils/WebsocketClient";
import { useRouter } from "next/router";

export default function Lobby() {
  // [props]難易度(数値が低いほど易しい)※[Easy, Normal, Hard]
  const [difficulty, setDifficulty] = useState("Normal");
  // [props]お題解答制限時間(分)
  const [readingTime, setReadingTime] = useState(2);
  // [props]コード記載制限時間(分)
  const [codingTime, setCodingTime] = useState(5);
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
          <GameSettingCard
            disabled={uuid !== room.ownerId}
            className={Styles.gameSettingCard}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            readingTime={readingTime}
            setReadingTime={setReadingTime}
            codingTime={codingTime}
            setCodingTime={setCodingTime}
          />
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
