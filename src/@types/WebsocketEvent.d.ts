import { User } from "@/@types/User";

export type WebsocketEvents =
  | onRoomUserListUpdate
  | onStartCodePhase
  | onAnswerPhaseStart
  | onStateUpdate
  | onResultOpen;
/**
 * サーバー側から勝手に送られてくる通知etc
 */

export type onRoomUserListUpdate = {
  type: "onRoomUserListUpdate";
  users: User[];
};

export type onStartCodePhase = {
  type: "onCodePhaseStart";
  answer: string;
};
export type onAnswerPhaseStart = {
  type: "onAnswerPhaseStart";
  code: string;
};
export type onStateUpdate = {
  type: "onStateUpdate";
  users: (User & { completed: boolean })[];
};
export type onResultOpen = {
  type: "onResultOpen";
  result: (User & {
    type: "answer" | "code";
    data: string;
  })[];
  isLast: boolean;
};
