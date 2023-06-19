// =============== ソケット通信で使用する状態まとめファイル ===============
import { atom } from "recoil";

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

type Room = {
  roomId: string;
  ownerId: string;
  users: {
    userId: string;
    username: string;
  }[];
};

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

type Game = {
  roomId: string;
  difficulty: string;
  readingTime: number;
  codingTime: number;
  turn: 1;
  users: {
    userId: string;
    username: string;
    phase: "read" | "code";
    problem: string;
    answerCheck: boolean;
    answer: [];
  }[];
};

// ゲームオブジェクト
export const gameState = atom<Game>({
  key: "gameState",
  default: {
    roomId: "",
    difficulty: "",
    readingTime: 0,
    codingTime: 0,
    turn: 1,
    users: [
      {
        userId: "",
        username: "",
        phase: "read",
        problem: "",
        answerCheck: false,
        answer: [],
      },
    ],
  },
});
