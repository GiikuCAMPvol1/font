// =============== ソケット通信で使用する関数まとめファイル ===============
import { Socket } from "socket.io-client";
import { ReqAnswer, ReqUpdateResult } from "@/@types/requests";

type handleCreateRoomClickProps = {
  socket: Socket;
  uuid: string;
  userName: string;
};

// 部屋作成関数
export const handleCreateRoomClick = ({
  socket,
  uuid,
  userName,
}: handleCreateRoomClickProps) => {
  const createRoomMessage = {
    userId: uuid,
    username: userName,
  };
  socket.emit("req_createRoom", createRoomMessage);
};

type handleJoinRoomClickProps = {
  socket: Socket;
  uuid: string;
  userName: string;
  roomId: string;
};

// 部屋参加関数
export const handleJoinRoomClick = ({
  socket,
  uuid,
  userName,
  roomId,
}: handleJoinRoomClickProps) => {
  const joinRoomMessage = {
    userId: uuid,
    username: userName,
    roomId: roomId,
  };
  socket.emit("req_joinRoom", joinRoomMessage);
};

type handleStartGameClickProps = {
  socket: Socket;
  roomId: string;
  difficulty: string;
  readingTime: number;
  codingTime: number;
};

// ゲーム開始関数
export const handleStartGameClick = ({
  socket,
  roomId,
  difficulty,
  readingTime,
  codingTime,
}: handleStartGameClickProps) => {
  const startGameMessage = {
    roomId,
    difficulty,
    readingTime,
    codingTime,
  };
  socket.emit("req_startGame", startGameMessage);
};

// 回答関数
export const handleAnswerClick = (socket: Socket, answerMessage: ReqAnswer) => {
  socket.emit("req_answer", answerMessage);
};

// 結果画面更新関数
export const handleUpdateResultClick = (
  socket: Socket,
  updateResultMessage: ReqUpdateResult
) => {
  socket.emit("req_updateResult", updateResultMessage);
};
