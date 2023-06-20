import { UserImg } from "@/components/UserImg";
import InputStyles from "@/styles/InputStyles.module.scss";
import Styles from "@/components/index/StartCard.module.scss";
import { generateUuid } from "@/utils/uuid";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";
import { useRecoilState } from "recoil";
import { userNameState, uuidState } from "@/recoil/socket";
import {
  handleCreateRoomClick,
  handleJoinRoomClick,
} from "@/utils/WebsocketClient";
import { socket } from "@/pages";
import { useRouter } from "next/router";

type props = {
  className?: string;
};

const StartCard = ({ className }: props) => {
  const [userName, setUserName] = useRecoilState(userNameState);
  const [uuid, setUuid] = useRecoilState(uuidState);
  const isomorphicEffect = useIsomorphicEffect();
  isomorphicEffect(() => {
    setUuid(generateUuid());
  }, []);
  const router = useRouter();
  const roomId: string = router.query.id as string;

  return (
    <div className={`${Styles.wrapper} ${className}`}>
      <div className={Styles.inputContainer}>
        <div className={Styles.icon}>
          <UserImg userId={userName || uuid} />
        </div>
        <div className={Styles.input}>
          <p>ニックネームを選択</p>
          <input
            type="text"
            className={InputStyles.InputText}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className={Styles.buttonWrapper}>
        {roomId === undefined ? (
          <button
            className={Styles.button}
            onClick={() => handleCreateRoomClick({ socket, uuid, userName })}
          >
            開始
          </button>
        ) : (
          <button
            className={Styles.button}
            onClick={() =>
              handleJoinRoomClick({ socket, uuid, userName, roomId })
            }
          >
            参加
          </button>
        )}
      </div>
    </div>
  );
};

export { StartCard };
