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
        data: "長さNの整数列A = (A1,A2,...AN)が与えられます。Aから偶数だけすべて取り出し、もとの順番を保って出力してください。",
        userId: "ホスト",
        username: "お題",
      },
      {
        type: "code",
        data: "function getEvenNumbers(arr) {\\n  const result = [];\\n  for (let i = 0; i < arr.length; i++) {\\n    if (arr[i] % 2 === 0) {\\n      result.push(arr[i]);\\n    }\\n  }\\n  return result;\\n}\\n\\nconst A = [1, 2, 3, 4, 5, 6, 7, 8, 9];\\nconst evenNumbers = getEvenNumbers(A);\\nconsole.log(evenNumbers); // [2, 4, 6, 8]",
        userId: "上田さん",
        username: "上田さん",
      },
      {
        type: "answer",
        data: "与えられた長さNの整数列A = (A1, A2, ..., AN)から、偶数のみを抽出して、元の順序を維持したまま出力するように求められています。つまり、偶数のみを含む新しい整数列B = (B1, B2, ..., BM)を作成し、Aの中から偶数を取り出す順序と同じ順序でBを構築する必要があります。",
        userId: "吉田さん",
        username: "吉田さん",
      },
      {
        type: "code",
        data: "def get_even_numbers(arr):\\n    result = []\\n    for num in arr:\\n        if num % 2 == 0:\\n            result.append(num)\\n    return result\\n\\nA = [1, 2, 3, 4, 5, 6, 7, 8, 9]\\neven_numbers = get_even_numbers(A)\\nprint(even_numbers) # [2, 4, 6, 8]",
        userId: "Kagariさん",
        username: "Kagariさん",
      },
      {
        type: "answer",
        data: "「ねえ、長さNの整数列Aがあるんだけど、その中から偶数だけを取り出して、順番を変えずに新しい整数列Bに入れてくれるかな？BにはAから取り出した偶数が元の順番通り入っているようにしてね！」",
        userId: "和田さん",
        username: "和田さん",
      },
      {
        type: "code",
        data: "package main\\n\\nimport \\fmt\\\\n\\nfunc getEvenNumbers(arr []int) []int {\\n    result := []int{}\\n    for _, num := range arr {\\n        if num % 2 == 0 {\\n            result = append(result, num)\\n        }\\n    }\\n    return result\\n}\\n\\nfunc main() {\\n    A := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}\\n    evenNumbers := getEvenNumbers(A)\\n    fmt.Println(evenNumbers) // [2 4 6 8]",
        userId: "かげさん",
        username: "かげさん",
      },
      {
        type: "answer",
        data: "「我が力により、長さNの数列A=(A1,A2,...,AN)より、偶数のみを抽出し、我が手により元の順序を保って披露するのだ！Bという名の新たな数列を造り、Aから摘み取った偶数がそのまま元の順序で宿るようにしてやるのだ！」",
        userId: "かえでさん",
        username: "かえでさん",
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
                text={"Next"}
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
