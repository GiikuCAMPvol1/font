import { atom } from "jotai";

export const turnAtom = atom({
  nowTurn: 1,
  maxTurn: 5,
});
