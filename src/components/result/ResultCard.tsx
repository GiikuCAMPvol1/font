import Styles from "@/components/result/ResultCard.module.scss";
import { ResultOpen } from "@/pages/result";

type Props = {
  resultOpenData?: ResultOpen
}

const ResultCard = ({resultOpenData}: Props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.resultOpenData}>
        {resultOpenData?.map((data, index) => (
          <div key={index}>
            {data.type == "answer" && (
              <div className={Styles.answerWrapper}>
                <p>{data.username}</p>
                {data.data}
              </div>
            )}
            {data.type == "code" && (
              <div className={Styles.codeWrapper}>
                <p>{data.username}</p>
                {data.data}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultCard