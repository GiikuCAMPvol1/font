import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { turnAtom } from "@/atom/turnAtom";
import styles from "@/styles/GameMainStyles/Turn.module.css";
import { userListAtom } from "@/atom/RoomAtom";

const Turn = () => {
  const [turnState] = useAtom(turnAtom);
  const userList = useAtomValue(userListAtom);

  return (
    <div className={styles.turn}>
      {turnState.nowTurn}/{userList.length}
    </div>
  );
};

export default Turn;
