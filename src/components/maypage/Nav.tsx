import React, { useState } from 'react'
import styles from './Nav.module.scss'
import { User } from '@/types/user'

export default function Nav() {
  const [modify, setModify] = useState(true)
  const modifyProfile = () => { setModify(!modify)}

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: 'https://placeimg.com/640/480/animals' // 사용자 프로필 이미지 URL
  }

  return (
    <nav className={styles.nav}>
      <div className={`${styles.nav} ${styles.nav__container}`}>
        <img className={styles.nav_img} src={dummyUser.profileImg} alt="" />
        <div className={styles.sidebar_text}>
          <h3>{dummyUser.displayName}</h3>
          <span>{dummyUser.email}</span>
        </div>
        <a className={styles.sidebar_edit} href={`/user/:username/certProfile`} onClick={modifyProfile}>
          {modify ? '정보 수정' : '수정 완료'}
        </a>
      </div>
    </nav>
  )
}
