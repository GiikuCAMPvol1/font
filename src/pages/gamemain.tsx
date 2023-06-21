import Header from "@/components/GameMainComponents/Header";
import Container from "@/components/GameMainComponents/Container";
import Footer from "@/components/GameMainComponents/Footer";
import { socket } from "@/pages/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameState, roomState } from "@/recoil/socket";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Gamemain = () => {
  const [game, setGame] = useRecoilState(gameState);
  const { roomId } = useRecoilValue(roomState);
  const router = useRouter();
  // 誰かが回答した時のレスポンス
  socket.on(`res_answer_${roomId}`, (data) => {
    setGame(data);
    if (data.phase === "end") {
      router.push(`/result?${data.roomId}`);
    }
  });

  // TODO:ターンが変わった時のレスポンス(全員が回答 or タイムアップ)
  useEffect(() => {}, [game.turn]);

  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Gamemain;
