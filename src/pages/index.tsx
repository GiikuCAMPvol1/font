import Styles from "@/styles/Index.module.scss";
import { UserImg } from "@/components/UserImg";

export default function Home() {
  return (
    <>
      <main className={Styles.main}>
        <UserImg userId={"test"} />
      </main>
    </>
  );
}
