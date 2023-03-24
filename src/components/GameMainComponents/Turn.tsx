import styles from '@/styles/GameMainStyles/Turn.module.css'

export default function Home() {

  let NowTurn:number = 1;
  let MaxTrun:number = 5;

  return (
    <div className={styles.turn}>
        {NowTurn}/{MaxTrun}
    </div>
  )
}
  