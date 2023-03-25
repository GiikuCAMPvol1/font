export type WebsocketRequests =
  | userIdRequest
  | endPhaseRequest
  | openNextResultRequest
  | joinRoomRequest
  | createRoomRequest
  | gameEndRequest;

export type userIdRequest =
  | {
      type: "userIdRequest";
    }
  | {
      type: "userIdRequest";
      userId: string;
      token: string;
    };

export type endPhaseRequest = {
  type: "endPhaseRequest";
  phase: "answer" | "code";
  data: string;
};

export type openNextResultRequest = {
  type: "openNextResultRequest";
};

export type joinRoomRequest = {
  type: "joinRoomRequest";
  roomId: string;
  username: string;
};

export type createRoomRequest = {
  type: "createRoomRequest";
  username: string;
};

export type gameEndRequest = {
  type: "gameEndRequest";
}