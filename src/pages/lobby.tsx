import { HTMLIcon } from "@/assets/HTMLIcon";
import GameSettingCard from "@/components/lobby/GameSettingCard";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/lobby/UserListCard";
import Styles from "@/styles/Lobby.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Lobby() {
  // [props]難易度(数値が低いほど易しい)※[0:Easy, 1:Normal, 2:Hard]
  const [difficulty, setDifficulty] = useState(1);
  // [props]お題解答制限時間(分)
  const [answerInputTime, setAnswerInputTime] = useState(2);
  // [props]コード記載制限時間(分)
  const [codeInputTime, setCodeInputTime] = useState(5);
  const router = useRouter();

  const InviteClick = () => {
    const inviteLink = `${location.origin}/?id=${router.query.id}`;
    if (navigator.clipboard) {
      void navigator.clipboard.writeText(inviteLink);
    }
  };

  // ownerのみが開始できる処理
  const StartClick = () => {
    // if (!roomMetadata) return;
    // socket?.sendMessage({
    //   type: "startGameRequest",
    //   roomId: roomId,
    //   difficulty: difficulty,
    //   readingInputTime: answerInputTime,
    //   codingInputTime: codeInputTime,
    // });
  };
  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard} />
        <div>
          <GameSettingCard
            className={Styles.gameSettingCard}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            answerInputTime={answerInputTime}
            setAnswerInputTime={setAnswerInputTime}
            codeInputTime={codeInputTime}
            setCodeInputTime={setCodeInputTime}
          />
          <div className={Styles.btnBox}>
            <LobbyBtn
              onClick={InviteClick}
              src={"/game/Invite.png"}
              alt={"招待アイコン"}
              text={"招待"}
            />
            {/* ownerにのみ表示 */}
            {/* {roomMetadata?.isOwner && (
              <LobbyBtn
                onClick={StartClick}
                src={"/game/Start.png"}
                alt={"開始アイコン"}
                text={"開始"}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
