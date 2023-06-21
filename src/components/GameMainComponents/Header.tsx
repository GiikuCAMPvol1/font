import styles from "@/styles/GameMainStyles/Header.module.css";
import {Turn} from "@/components/GameMainComponents/Turn";
import {ProblemTitle} from "@/components/GameMainComponents/ProblemTitle";
import {CountDown} from "@/components/GameMainComponents/CountDown";

function Header() {
  return (
    <div className={styles.flex}>
      <Turn />
      <ProblemTitle />
      <CountDown />
    </div>
  );
}

export {Header}