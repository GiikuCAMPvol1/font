import Styles from '@/styles/Home.module.css'
import GameMain from './components/GameMain'
import { StartCard } from "@/components/StartCard";
import { DescriptionCard } from "@/components/DescriptionCard";
import { HTMLIcon } from "@/assets/HTMLIcon";

export default function Home() {
  return (
    <>
      {/* <main className={Styles.main}>
        <GameMain />
      </main> */}
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <StartCard className={Styles.start} />
        <DescriptionCard className={Styles.description} />
      </div>
    </>
  );
}
