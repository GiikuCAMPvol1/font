// UsersState.tsx
import React, { useState } from "react";
import styles from "@/styles/GameMainStyles/UsersState.module.css";
import { UserImg } from "@/components/UserImg";

export default function UsersState() {
  const [userIds, setUserIds] = useState<number[]>([1, 2, 3, 4, 5]);

  return (
    <div className={styles.UsersStateArea}>
      {userIds.map((userId) => (
        <div className={styles.ImgSize} key={userId}>
          <UserImg key={userId} userId={userId.toString()} />
        </div>
      ))}
    </div>
  );
}
