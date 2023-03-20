import Styles from "@/styles/Index.module.scss";
import { StartCard } from "@/components/StartCard";
import { DescriptionCard } from "@/components/DescriptionCard";
import { HTMLIcon } from "@/assets/HTMLIcon";

export default function Home() {
  return (
    <>
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
