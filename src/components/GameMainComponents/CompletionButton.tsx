import styles from '@/styles/GameMainStyles/CompletionButton.module.css'
import Image from 'next/image';
import CheckImage from '../../../public/GameMainImages/check.png';

export default function Home() {
  return (
    <div className={styles.CompletionButtonArea}>
        <Image src={CheckImage} alt="CheckImage" className={styles.CheckImage} />
        <p className={styles.CompletionText}>完了！</p>
    </div>
  )
}
