import styles from "@/styles/GameMainStyles/Footer.module.css";
import LanguageSelect from "@/components/GameMainComponents/LanguageSelect";
import AnswerInput from "@/components/GameMainComponents/AnswerInput";
import CompletionButton from "@/components/GameMainComponents/CompletionButton";
import { useAtomValue } from "jotai";
import { phaseAtom } from "@/atom/PhaseAtom";

export default function Footer() {
  const phaseItem = useAtomValue(phaseAtom);

  return (
    <div className={styles.footer}>
      {phaseItem?.phase === "coding" ? <LanguageSelect /> : <AnswerInput />}
      <CompletionButton />
    </div>
  );
}
