import React, { useState } from 'react'

import styles from './index.module.scss'
import { User } from '@/types/user'

export default function MyPage() {
  // const [email, setEmail] = useState('')
  // const [displayName, setDisplayName] = useState('')
  //(React) 아이콘 사용하기
  //https://eunhee-programming.tistory.com/206

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: 'https://placeimg.com/640/480/animals' // 사용자 프로필 이미지 URL
  }

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.sidebar}>
          <div className={`${styles.sidebar} ${styles.inner}`}>
            <img src={dummyUser.profileImg} alt="" />
            <h3>{dummyUser.displayName}</h3>
            <span>{dummyUser.email}</span>
            <a href={`/user/:username/certProfile`}>정보 수정하기</a>
          </div>
        </nav>
        <section className={styles.my_page}>
          <div className={styles.my_page_container}>
            <ul className={styles.my_lists}>
              <li className={`${styles.my_list} ${styles.account}`}>
                계좌
                <div className={styles.lists}>
                  <a href={`/user/:username/accoun`}>계좌조회</a>
                  <a href={`/user/:username/account/addAccount`}>계좌추가</a>
                </div>
              </li>
              <li className={`${styles.my_list} ${styles.checkInfo}`}>
                장바구니
                <div className={styles.lists}>
                  <a href={'/payment/:username/checkInfo'}>장바구니</a>
                </div>
              </li>
              <li className={`${styles.my_list} ${styles.jjimItems}`}>
                찜한 상품
                <div className={styles.lists}>
                  <a href={`/user/:username/jjimItems`}>찜한 상품</a>
                </div>
              </li>
            </ul>
            <hr />
            <div className={`${styles.my_list} ${styles.list_getItems}`}>
              <span className={styles.list}>구매내역</span>
              <span>전체 내역 조회</span>
              <span className={styles.getItem}>
                <img className={styles.getItem_img} src="" alt="" />
                <span>상품명</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
