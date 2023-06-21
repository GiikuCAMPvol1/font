import styles from "@/styles/GameMainStyles/Container.module.css";
import { UsersState } from "@/components/GameMainComponents/UsersState";
import { CodeEditor } from "@/components/GameMainComponents/CodeEditor";

function Container() {
  return (
    <div className={styles.flex}>
      <UsersState />
      <CodeEditor />
    </div>
  );
}

export { Container };
