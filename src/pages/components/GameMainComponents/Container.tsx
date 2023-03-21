import styles from './GameMainStyles/Container.module.css'
import UsersState from "./UsersState"
import CodeEditor from './CodeEditor'

export default function Home() {
  return (
    <div className={styles.flex}>
        <UsersState />
        <CodeEditor />
    </div>
  )
}
