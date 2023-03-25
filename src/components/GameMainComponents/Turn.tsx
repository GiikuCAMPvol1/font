import React, { useContext,useState } from 'react';
import styles from '@/styles/GameMainStyles/Turn.module.css';
import TurnContext from '@/context/TurnContext';

const Turn = () => {
  const { nowTurn, setNowTurn } = useContext(TurnContext);
  const [maxTurn] = useState<number>(5);

  return (
    <div className={styles.turn}>
      {nowTurn}/{maxTurn}
    </div>
  );
}

export default Turn;
