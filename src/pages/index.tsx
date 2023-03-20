import Styles from "@/styles/Index.module.scss";
import { StartCard } from "@/components/StartCard";

export default function Home() {
  return (
    <>
      <main className={Styles.main}>
        <StartCard />
      </main>
    </>
  );
}
