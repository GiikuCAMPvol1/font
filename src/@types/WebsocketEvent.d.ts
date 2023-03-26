import { User } from "@/@types/User";

export type WebsocketEvents =
  | onRoomUserListUpdate
  | onPhaseStart
  | onStateUpdate
  | onResultOpen
  | onGameEnd;
/**
 * サーバー側から勝手に送られてくる通知etc
 */

export type onRoomUserListUpdate = {
  type: "onRoomUserListUpdate";
  users: [
    {
      userId: string[];
      username: string[];
    }
  ];
};

export type onPhaseStart = {
  type: "onPhaseStart";
  phase: "coding" | "reading";
  data: string;
};
export type onStateUpdate = {
  type: "onStateUpdate";
  users: (User & { completed: boolean })[];
};
export type onResultOpen = {
  type: "onResultOpen";
  result: (resultAnswer | resultCode)[];
  isLast: boolean;
};

export type resultAnswer = User & {
  type: "answer";
  data: string;
}

export type resultCode = User & {
  type: "code";
  data: string;
}

export type onGameEnd = {
  type: "onGameEnd";
};
