import React, { useContext } from 'react';
import styles from '@/styles/GameMainStyles/Footer.module.css';
import LanguageSelect from '@/components/GameMainComponents/LanguageSelect';
import AnswerInput from '@/components/GameMainComponents/AnswerInput';
import CompletionButton from '@/components/GameMainComponents/CompletionButton';
import TurnContext from '@/context/TurnContext';

export default function Footer() {
  const { nowTurn } = useContext(TurnContext);

  return (
    <div className={styles.footer}>
      {nowTurn % 2 === 1 ? <LanguageSelect /> : <AnswerInput />}
      <CompletionButton />
    </div>
  );
}
