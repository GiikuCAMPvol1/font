import { User } from "@/@types/User";

export type WebsocketEvents =
  | onRoomUserListUpdate
  | onPhaseStart
  | onStateUpdate
  | onResultOpen;
/**
 * サーバー側から勝手に送られてくる通知etc
 */

export type onRoomUserListUpdate = {
  type: "onRoomUserListUpdate";
  users: User[];
};

export type onPhaseStart = {
  type: "onPhaseStart";
  phase: "answer" | "code";
  data: string;
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
