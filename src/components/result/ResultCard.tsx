import Styles from "@/components/result/ResultCard.module.scss";
import { ResultOpen } from "@/pages/result";
import { UserImg } from "../UserImg";

type Props = {
  resultOpenData?: ResultOpen;
};

const ResultCard = ({ resultOpenData }: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.resultOpenData}>
        {resultOpenData?.map((data, index) => (
          <div key={index}>
            {data.type == "answer" && (
              <div className={Styles.answerWrapper}>
                <div className={Styles.userWrapper}>
                  <div className={Styles.userImg}>
                    <UserImg userId={data.userId} />
                  </div>
                  <p className={Styles.userName}>
                    {data.username}
                  </p>
                </div>
                <div className={Styles.answerData}>
                  {data.data}
                </div>
              </div>
            )}
            {data.type == "code" && (
              <div className={Styles.codeWrapper}>
                <div className={Styles.userWrapper}>
                  <div className={Styles.userImg}>
                    <UserImg userId={data.userId} />
                  </div>
                  <p className={Styles.userName}>
                    {data.username}
                  </p>
                </div>
                <div className={Styles.codeData}>
                  {data.data}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
