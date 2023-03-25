import { useAtom } from "jotai";
import { userImgCacheAtom } from "@/atom/userImgCache";
import { toSvg } from "jdenticon/standalone";
import { LoadingIcon } from "@/assets/LoadingIcon";
import Styles from "@/components/UserImg.module.scss";

type props = {
  userId?: string;
};

const UserImg = ({ userId }: props) => {
  const [userImgCache, setUserImgCache] = useAtom(userImgCacheAtom);
  if (!userId)
    return <LoadingIcon className={`${Styles.img} ${Styles.loading}`} />;
  if (userImgCache[userId])
    return (
      <img src={userImgCache[userId]} alt={userId} className={Styles.img} />
    );
  const size = 200;
  const svg = `data:image/svg+xml;,${encodeURIComponent(toSvg(userId, size))}`;
  setUserImgCache({ ...userImgCache, [userId]: svg });
  return <img src={svg} alt={userId} className={Styles.img} />;
};

export { UserImg };
