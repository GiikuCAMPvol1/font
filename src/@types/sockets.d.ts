import { ReqAnswerRead, ReqAnswerCode } from "./requests";

export type Room = {
  roomId: string;
  ownerId: string;
  users: {
    userId: string;
    username: string;
  }[];
};

export type User = {
  userId: string;
  username: string;
  problemId: number;
  isAnswered: boolean;
};
export type Problem = {
  problemId: number;
  problem: string;
  answers: (ReqAnswerRead | ReqAnswerCode)[];
};

export type Game = {
  roomId: string;
  difficulty: string;
  readingTime: number;
  codingTime: number;
  turn: number;
  phase: "read" | "code" | "end";
  users: User[];
  problems: Problem[];
};
