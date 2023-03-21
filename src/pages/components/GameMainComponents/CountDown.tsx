import styles from './GameMainStyles/CountDown.module.css'

export default function Home() {
    return (
      <div className={styles.CountDownArea}>
        <div className={styles.cycle}></div>
        <div className={styles.time}>01:25</div>
      </div>
    )
  }
  