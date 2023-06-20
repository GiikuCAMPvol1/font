import React from "react";
import styles from "@/styles/GameMainStyles/Turn.module.css";
import { useRecoilState } from "recoil";
import { gameState } from "@/recoil/socket";

const Turn = () => {
  const [game, setGame] = useRecoilState(gameState);
  const maxTurn = game.users.length;
  const nowTurn = game.turn;

  return (
    <div className={styles.turn}>
      {nowTurn}/{maxTurn}
    </div>
  );
};

export default Turn;
