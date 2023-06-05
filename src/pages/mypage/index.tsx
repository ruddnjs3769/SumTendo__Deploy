import React, { useState } from 'react'

import styles from './index.module.scss'
import { User } from '@/types/user'

export default function MyPage() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: 'https://placeimg.com/640/480/animals' // 사용자 프로필 이미지 URL
  }
  //(React) 아이콘 사용하기
  //https://eunhee-programming.tistory.com/206

  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <img src="" alt="" />
          <p>{displayName}</p>
          <p>{email}</p>
          <a href="">정보 수정하기</a>
        </aside>
        <div className={`${styles.menu} ${styles.account}`}>
          장바구니
          <a href={`/user/:username/accoun`}>계좌조회 </a>
          <a href={`/user/:username/account/addAccount`}>계좌추가</a>
        </div>
        <div className={`${styles.menu} ${styles.checkInfo}`}>
          장바구니
          <a href={'/payment/:username/checkInfo'}>장바구니</a>
        </div>
        <div className={`${styles.menu} ${styles.jjimItems}`}>
          찜한 상품
          <a href={`/user/:username/jjimItems`}>찜한 상품</a>
        </div>
      </div>
    </>
  )
}
