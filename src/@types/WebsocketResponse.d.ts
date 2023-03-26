export type WebsocketResponses = joinRoomResponse | userIdResponse;

/**
 * websocket requestのレスポンス
 */

export type joinRoomResponse = {
  type: "joinRoomResponse";
  roomId: string;
  userId: string;
  owner: boolean;
  users: [
    {
      userId: string[];
      username: string[];
    }
  ];
};
export type userIdResponse = {
  type: "userIdResponse";
  userId: string;
  token: string;
};
