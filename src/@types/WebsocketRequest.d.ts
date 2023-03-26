export type WebsocketRequests =
  | userIdRequest
  | endPhaseRequest
  | openNextResultRequest
  | joinRoomRequest
  | createRoomRequest
  | gameEndRequest
  | startGameRequest;

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
  phase: "coding" | "reading";
  data: string;
};

export type openNextResultRequest = {
  type: "openNextResultRequest";
};

export type joinRoomRequest = {
  type: "joinRoomRequest";
  roomId: string;
  userId: string;
  username: string;
};

export type createRoomRequest = {
  type: "createRoomRequest";
  userId: string;
  username: string;
};

export type gameEndRequest = {
  type: "gameEndRequest";
};

export type startGameRequest = {
  type: "startGameRequest";
  difficulty: number;
  roomId:string;
  readingInputTime: number;
  codingInputTime: number;
}