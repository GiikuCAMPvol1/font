// =============== ゲームで使用する回答データファイル ===============
import { atom } from "recoil";

// 回答コード or テキスト
export const answerCodeState = atom<string>({
  key: "answerCodeState",
  default: "",
});

// 回答言語
export const languageState = atom<string>({
  key: "languageState",
  default: "js",
});
