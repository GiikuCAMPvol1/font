import React from "react";
import styles from "@/styles/GameMainStyles/Turn.module.css";
import { useRecoilValue} from "recoil";
import { gameState } from "@/recoil/socket";

const Turn = () => {
  const game = useRecoilValue(gameState);
  const maxTurn = game.users.length;
  const nowTurn = game.turn;

  return (
    <div className={styles.turn}>
      {nowTurn}/{maxTurn}
    </div>
  );
};

export {Turn};
