import React from 'react';
import { useAtom } from 'jotai';
import { turnAtom } from '@/atom/turnAtom';
import styles from '@/styles/GameMainStyles/Turn.module.css';

const Turn = () => {
  const [turnState, setTurnState] = useAtom(turnAtom);
  const [maxturnState, setMaxTurnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;
  const { maxTurn } = maxturnState;

  return (
    <div className={styles.turn}>
      {nowTurn}/{maxTurn}
    </div>
  );
};

export default Turn;
