// =============== ゲームで使用する設定値まとめファイル ===============
import { atom } from "recoil";

// ゲームの難易度
export const difficultyState = atom<string>({
  key: "difficultyState",
  default: "normal",
});

// お題解答制限時間(分)
export const readingTimeState = atom<number>({
  key: "readingTimeState",
  default: 2,
});

// コード記載制限時間(分)
export const codingTimeState = atom<number>({
  key: "codingTimeState",
  default: 5,
});
