import Styles from "@/styles/Index.module.scss";
import { StartCard } from "@/components/index/StartCard";
import { DescriptionCard } from "@/components/index/DescriptionCard";
import { HTMLIcon } from "@/assets/HTMLIcon";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { roomState, uuidState } from "@/recoil/socket";
import { useRouter } from "next/router";
import io from "socket.io-client";

export const socket = io("http://localhost:8000");

export default function Home() {
  const uuid = useRecoilValue(uuidState);
  const setRoom = useSetRecoilState(roomState);
  const router = useRouter();
  const res_createRoom = uuid;
  const res_joinRoom: string = router.query.id as string;

  // 部屋作成時のレスポンス
  socket.on(res_createRoom, (data) => {
    setRoom(data);
    router.push(`/lobby?id=${data.roomId}`);
  });

  // 部屋参加時のレスポンス
  socket.on(res_joinRoom, (data) => {
    setRoom(data);
    router.push(`/lobby?id=${data.roomId}`);
  });

  return (
    <>
      <div className={Styles.logoWrapper}>
        <HTMLIcon className={Styles.logo} />
      </div>
      <div className={Styles.main}>
        <StartCard className={Styles.start} />
        <DescriptionCard className={Styles.description} />
      </div>
    </>
  );
}
