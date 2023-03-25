import styles from "@/styles/GameMainStyles/UsersState.module.css";
import UserIcon from "./UserIcon";

export default function Home() {
  return (
    <div className={styles.UsersStateArea}>
      <UserIcon />
    </div>
  );
}
