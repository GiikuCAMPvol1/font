import { createContext } from "react";

const TurnContext = createContext<{
  nowTurn: number;
  setNowTurn: (turn: number) => void;
}>({
  nowTurn: 1,
  setNowTurn: () => {},
});

export { TurnContext };
