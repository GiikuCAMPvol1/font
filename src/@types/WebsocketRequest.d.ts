export type WebsocketRequests =
  | userIdRequest
  | endCodePhaseRequest
  | endAnswerPhaseRequest
  | openNextResultRequest;

export type userIdRequest =
  | {
      type: "userIdRequest";
    }
  | {
      type: "userIdRequest";
      userId: string;
      token: string;
    };

export type endCodePhaseRequest = {
  type: "endCodePhaseRequest";
  code: string;
};

export type endAnswerPhaseRequest = {
  type: "endAnswerPhaseRequest";
  answer: string;
};

export type openNextResultRequest = {
  type: "OpenNextResultRequest";
};
