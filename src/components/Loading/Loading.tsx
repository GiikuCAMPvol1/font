import { LoadingIcon } from "@/assets/LoadingIcon";
import Styles from "@/components/Loading/Loading.module.scss";

type props = {
  message?: string;
};

const Loading = ({ message }: props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.iconWrapper}>
          <LoadingIcon className={Styles.icon} />
        </div>
        <p className={Styles.text}>{message}</p>
      </div>
    </div>
  );
};

export { Loading };
