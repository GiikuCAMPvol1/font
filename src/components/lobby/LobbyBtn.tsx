import Image from 'next/image'
import React from 'react'
import Styles from "@/components/lobby/LobbyBtn.module.scss";

const LobbyBtn = () => {
  return (
    <div className={`${Styles.wrapper}`}>
      <Image
        src={'/game/Invite.png'}
        alt={'招待アイコン'}
        width={26}
        height={26}
      />
      <p>招待</p>
    </div>
  )
}

export default LobbyBtn