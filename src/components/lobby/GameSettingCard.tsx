import Styles from "@/components/lobby/GameSettingCard.module.scss";

type props = {
  className?: string;
};

const GameSettingCard = ({ className }: props) => {
  return (
    <div className={`${Styles.wrapper} ${className}`}>GameSettingCard</div>
  )
}

export default GameSettingCard