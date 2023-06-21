// =============== ソケット通信で使用する状態まとめファイル ===============
import { atom } from "recoil";
import { Game, Room } from "@/@types/sockets";

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

// 部屋オブジェクト
export const roomState = atom<Room>({
  key: "roomState",
});

// ゲームオブジェクト
export const gameState = atom<Game>({
  key: "gameState",
});
