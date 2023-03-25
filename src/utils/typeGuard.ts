import { joinRoomResponse, userIdResponse } from "@/@types/WebsocketResponse";
import {
  onGameEnd,
  onPhaseStart,
  onResultOpen,
  onRoomUserListUpdate,
  onStateUpdate,
} from "@/@types/WebsocketEvent";

const typeGuard = {
  userIdResponse: (i: unknown): i is userIdResponse =>
    typeof i === "object" && (i as userIdResponse).type === "userIdResponse",
  joinRoomResponse: (i: unknown): i is joinRoomResponse =>
    typeof i === "object" &&
    (i as joinRoomResponse).type === "joinRoomResponse",
  onStateUpdate: (i: unknown): i is onStateUpdate =>
    typeof i === "object" && (i as onStateUpdate).type === "onStateUpdate",
  onRoomUserListUpdate: (i: unknown): i is onRoomUserListUpdate =>
    typeof i === "object" &&
    (i as onRoomUserListUpdate).type === "onRoomUserListUpdate",
  onPhaseStart: (i: unknown): i is onPhaseStart =>
    typeof i === "object" && (i as onPhaseStart).type === "onPhaseStart",
  onResultOpen: (i: unknown): i is onResultOpen =>
    typeof i === "object" && (i as onResultOpen).type === "onResultOpen",
  onGameEnd: (i: unknown): i is onGameEnd =>
    typeof i === "object" && (i as onGameEnd).type === "onGameEnd",
};

export { typeGuard };
