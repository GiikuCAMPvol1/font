import styles from './GameMainStyles/Header.module.css'
import Turn from './Turn'
import ProblemTitle from './ProblemTitle'
import CountDown from './CountDown'

export default function Home() {
    return (
      <div className={styles.flex}>
          <Turn />
          <ProblemTitle />
          <CountDown />
      </div>
    )
  }
  