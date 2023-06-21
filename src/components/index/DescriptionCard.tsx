import Styles from "@/components/index/DescriptionCard.module.scss";
import { Slide } from "@/components/slide";

type props = {
  className?: string;
};

const DescriptionCard = ({ className }: props) => {
  return (
    <div className={`${className} ${Styles.wrapper}`}>
      <Slide />
    </div>
  );
};

export { DescriptionCard };
