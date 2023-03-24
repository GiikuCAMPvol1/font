import styles from '@/styles/GameMainStyles/Footer.module.css'
import LanguageSelect from '@/components/GameMainComponents/LanguageSelect'
import CompletionButton from '@/components/GameMainComponents/CompletionButton'

export default function Home() {
  return (
    <div className={styles.footer}>
        <LanguageSelect />
        <CompletionButton />
    </div>
  )
}
