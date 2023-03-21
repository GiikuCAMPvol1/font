import styles from './GameMainStyles/CompletionButton.module.css'
import Image from 'next/image';
import CheckImage from './GameMainImages/check.png';

export default function Home() {
  return (
    <div className={styles.CompletionButtonArea}>
        <Image src={CheckImage} alt="CheckImage" className={styles.CheckImage} />
        <p className={styles.CompletionText}>完了！</p>
    </div>
  )
}
