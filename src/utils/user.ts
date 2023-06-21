import { Game, User } from "@/@types/sockets";

const getUserByUserId = (game: Game, userId: string): User => {
  const user = game.users.find((user) => user.userId === userId);
  if (!user) throw new Error("User not found");
  return user;
};

export { getUserByUserId };
