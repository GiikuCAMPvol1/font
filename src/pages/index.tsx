import styles from '@/styles/Home.module.css'
import GameMain from './components/GameMain'


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <GameMain />
      </main>
    </>
  )
}
