import Header from "@/components/GameMainComponents/Header";
import Container from "@/components/GameMainComponents/Container";
import Footer from "@/components/GameMainComponents/Footer";
import { socket } from "@/pages/index";
import {useRecoilState, useRecoilValue} from "recoil";
import { gameState, roomState } from "@/recoil/socket";
import { useEffect } from "react";

const Gamemain = () => {
  const game = useRecoilValue(gameState);
  const [room, setRoom] = useRecoilState(roomState);
  const roomId = room.roomId;

  // 誰かが回答した時のレスポンス
  socket.on(`res_answer_${roomId}`, (data) => {
    setRoom(data);
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
