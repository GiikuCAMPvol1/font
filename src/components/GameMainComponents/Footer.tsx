import React, { useContext } from "react";
import styles from "@/styles/GameMainStyles/Footer.module.css";
import LanguageSelect from "@/components/GameMainComponents/LanguageSelect";
import AnswerInput from "@/components/GameMainComponents/AnswerInput";
import CompletionButton from "@/components/GameMainComponents/CompletionButton";
import { useAtom } from "jotai";
import { turnAtom } from "@/atom/turnAtom";

export default function Footer() {
  const [turnState] = useAtom(turnAtom);
  const { nowTurn } = turnState;

  return (
    <div className={styles.footer}>
      {nowTurn % 2 === 1 ? <LanguageSelect /> : <AnswerInput />}
      <CompletionButton />
    </div>
  );
}
