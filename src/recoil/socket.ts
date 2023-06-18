// =============== ソケット通信で使用する状態まとめファイル ===============
import { atom } from "recoil";
import { io, Socket } from "socket.io-client";

// export const socketState = atom<Socket>({
//   key: "socketState",
//   default: io("http://localhost:8000"),
// });

// 部屋作成・参加時のユーザー名
export const userNameState = atom<string>({
  key: "userNameState",
  default: "",
});

// 部屋作成・参加時のユーザーID
export const uuidState = atom<string>({
  key: "uuidState",
  default: "",
});

interface Room {
  roomId: string;
  ownerId: string;
  users: {
    userId: string;
    username: string;
  }[];
}

// 部屋オブジェクト
export const roomState = atom<Room>({
  key: "roomState",
  default: {
    roomId: "",
    ownerId: "",
    users: [
      {
        userId: "",
        username: "",
      },
    ],
  },
});
