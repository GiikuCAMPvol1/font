import styles from './GameMainStyles/Footer.module.css'
import LanguageSelect from './LanguageSelect'
import CompletionButton from './CompletionButton'

export default function Home() {
  return (
    <div className={styles.footer}>
        <LanguageSelect />
        <CompletionButton />
    </div>
  )
}
