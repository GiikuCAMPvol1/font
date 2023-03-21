import Styles from "@/components/DescriptionCard.module.scss";

type props = {
  className?: string;
};

const DescriptionCard = ({ className }: props) => {
  return <div className={`${className} ${Styles.wrapper}`}>teste</div>;
};

export { DescriptionCard };
