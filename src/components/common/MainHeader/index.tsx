import React from 'react'
import styles from './index.module.scss'

export default function MainHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Sumtendo</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>베스트</li>
          <li>발매 예정</li>
          <li>최신 상품 보기</li>
          <li>할인 상품 보기</li>
          <li className={styles.mypage}>마이 페이지</li>
          <li className={styles.login}>로그인 / 회원가입 하기</li>
          <li className={styles.search}>검색(icon)</li>
        </ul>
      </nav>
    </header>
  )
}
