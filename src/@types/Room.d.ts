export type User = {
  userId: string;
  username: string;
  completed?: boolean;
};

export type Room = {
  roomId: string;
  isOwner: boolean;
};
