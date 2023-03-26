import { HTMLIcon } from "@/assets/HTMLIcon";
import LobbyBtn from "@/components/lobby/LobbyBtn";
import { UserListCard } from "@/components/result/UserListCard";
import ResultCard from "@/components/result/ResultCard";
import Styles from "@/styles/Lobby.module.scss";
import { useEffect, useState } from "react";

export type ResultOpen = {
  type: string;
  data: string;
  userId: string;
  username: string;
}[];

const Result = () => {
  // 現在の画面状態(初期値:wait)
  const [crrDisplay, setCrrDisplay] = useState("wait");
  const [resultOpenData, setResultOpenData] = useState<ResultOpen>();
  useEffect(() => {
    // Todo:ページを開いたときに参加者情報の取得&回答取得
    const dummyResultOpenData = [
      {
        type: "answer",
        data: "リンゴと表示",
        userId: "<uuid>",
        username: "最初の人",
      },
      {
        type: "code",
        data: "console.log('リンゴ')",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "answer",
        data: "リンゴと表示",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "code",
        data: "print('リンゴ')",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "answer",
        data: "リンゴと表示",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "code",
        data: "print('リンゴ')",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "answer",
        data: "リンゴと表示",
        userId: "<uuid>",
        username: "<string>",
      },
      {
        type: "code",
        data: "print('リンゴ')",
        userId: "<uuid>",
        username: "<string>",
      },
    ];
    setResultOpenData(dummyResultOpenData);
  }, []);

  // Todo:開始ボタンを押したときの処理
  const StartClick = () => {
    console.log("Click Start");
    setCrrDisplay("next");
  };

  // Todo:次へボタンを押したときの処理
  const NextClick = () => {
    console.log("Click Next");
    // if () {
    //   setCrrDisplay("fin")
    // }
  };

  // Todo:終了ボタンを押したときの処理
  const FinClick = () => {
    console.log("Click Fin");
  };

  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <UserListCard className={Styles.userListCard} />
        <div>
          <ResultCard resultOpenData={resultOpenData} />
          <div className={Styles.btnBox}>
            <div></div>
            {crrDisplay == "wait" && (
              <LobbyBtn
                onClick={StartClick}
                src={"/game/Start.png"}
                alt={"開始アイコン"}
                text={"開始"}
              />
            )}
            {crrDisplay == "play" && (
              <LobbyBtn
                onClick={NextClick}
                src={"/game/Start.png"}
                alt={"次へアイコン"}
                text={"次へ"}
              />
            )}
            {crrDisplay == "fin" && (
              <LobbyBtn
                onClick={FinClick}
                src={"/game/Start.png"}
                alt={"次のゲームアイコン"}
                text={"次のゲームへ"}
              />
            )}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
