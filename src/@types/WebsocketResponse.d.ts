import { User } from "@/@types/User";

export type WebsocketResponses = joinRoomResponse | userIdResponse;

/**
 * websocket requestのレスポンス
 */

export type joinRoomResponse = {
  type: "joinRoomResponse";
  roomId: string;
  userId: string;
  users: User[];
};
export type userIdResponse = {
  type: "userIdResponse";
  userId: string;
  token: string;
};
