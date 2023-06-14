import React, { useState } from 'react'
import styles from './Nav.module.scss'
import { User } from '@/types/user'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [modify, setModify] = useState(true)

  const toggleModify = () => {
    setModify((prevModify) => !prevModify)
  }

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: '' // 사용자 프로필 이미지 URL
  }

  const getLinkTo = () => {
    return modify ? '/user/:username/certProfile' : '/user/:username'
  }

  const navToCertprofile = () => {
    if (modify) {
      toggleModify()
    }
  }

  return (
    <nav className={styles.navBar}>
      <div className={`${styles.nav} ${styles.nav__container}`}>
        <img className={styles.nav_img} src={dummyUser.profileImg} alt="" />
        <div className={styles.sidebar_text}>
          <h3 className={styles.sidebar_userName}>{dummyUser.displayName}</h3>
          <span>{dummyUser.email}</span>
        </div>
        <Link className={`${styles.aTag} ${styles.sidebar_edit}`} to={getLinkTo()} onClick={navToCertprofile}>
          {modify ? '정보 수정' : '수정 완료'}
        </Link>
      </div>
    </nav>
  )
}
