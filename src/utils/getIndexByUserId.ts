export const getIndexByUserId = (
  users: { userId: string }[],
  userId: string
): number => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === userId) {
      return i;
    }
  }
  return -1; // 見つからなかった場合は-1を返す（任意）
};
