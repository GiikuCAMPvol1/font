import { Problem } from "@/@types/sockets";
import { ReqAnswerRead, ReqAnswerCode } from "@/@types/requests";
const getLastAnswerFromProblem = (
  problem: Problem
): ReqAnswerRead | ReqAnswerCode => {
  return problem.answers[problem.answers.length - 1];
};

export { getLastAnswerFromProblem };
