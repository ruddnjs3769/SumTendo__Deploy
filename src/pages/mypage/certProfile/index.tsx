import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { Link } from 'react-router-dom'

export default function CertProfile() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h1 className={styles.title}>개인 정보 수정</h1>
              <hr className={styles.line} />
              <label className={styles.label} htmlFor="password">
                비밀번호 재확인
              </label>
              <div className={styles.text}>
                회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.
              </div>
            </div>
            <form className={styles.inputForm}>
              <input
                id="password"
                className={`${styles.inputTag} ${styles.password}`}
                type="password"
                name="password"
                max="19"
                placeholder="비밀번호를 입력하세요"
                required
              />
              <span className={`${styles.spanTag} ${styles.errorMsg}`}>비밀번호가 올바르지 않습니다.</span>
              <Link to="/user/:username/certProfile/editProfile">
                <button className={`${styles.btnTag} ${styles.checkBtn}`}>확인</button>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
