import styles from "@/styles/GameMainStyles/Footer.module.css";
import { LanguageSelect } from "@/components/GameMainComponents/LanguageSelect";
import { AnswerInput } from "@/components/GameMainComponents/AnswerInput";
import { CompletionButton } from "@/components/GameMainComponents/CompletionButton";
import { useRecoilValue } from "recoil";
import { gameState } from "@/recoil/socket";

function Footer() {
  const game = useRecoilValue(gameState);

  return (
    <div className={styles.footer}>
      {game?.phase === "code" ? <LanguageSelect /> : <AnswerInput />}
      <CompletionButton />
    </div>
  );
}

export { Footer };
