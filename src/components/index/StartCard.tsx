import { UserImg } from "@/components/UserImg";
import InputStyles from "@/styles/InputStyles.module.scss";
import Styles from "@/components/index/StartCard.module.scss";
import { useState } from "react";
import { generateUuid } from "@/utils/uuid";
import { useIsomorphicEffect } from "@/utils/IsomorphicEffect";
import { socketAtom } from "@/atom/socketAtom";
import {useAtomValue, useSetAtom} from "jotai";
import { useRouter } from "next/router";
import {roomMetadataAtom, userListAtom} from "@/atom/RoomAtom";

type props = {
  className?: string;
};

const StartCard = ({ className }: props) => {
  const [userName, setUserName] = useState("");
  const [uuid, setUuid] = useState("");
  const socket = useAtomValue(socketAtom);
  const setUserList = useSetAtom(userListAtom);
  const setRoom = useSetAtom(roomMetadataAtom);
  const router = useRouter();
  const isomorphicEffect = useIsomorphicEffect();
  isomorphicEffect(() => {
    setUuid(generateUuid());
  }, []);

  const createRoom = () => {
    void (async () => {
      const room = await socket?.createRoomRequest(userName);
      if (room === undefined) return;
      setUserList(room.users);
      setRoom({
        roomId: room.roomId,
        isOwner: room.owner
      })
      await router.push(`/lobby?${room.roomId}`);
    })();
  };

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
        <button className={Styles.button} onClick={createRoom}>
          開始
        </button>
      </div>
    </div>
  );
};

export { StartCard };
