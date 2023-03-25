import { userIdResponse } from "@/@types/WebsocketResponse";

const typeGuard = {
  userIdResponse: (i: unknown): i is userIdResponse =>
    typeof i === "object" && (i as userIdResponse).type === "userIdResponse",
};

export { typeGuard };
