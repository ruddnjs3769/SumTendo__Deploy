import React from 'react'
import styles from './index.module.scss'

export default function LogIn() {
  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['login-group']}>
        <form className={styles['login-form']} action="">
          <div className={styles['input-group']}>
            <input className={styles['input-info']} type="email" name="email" placeholder="메일 주소/로그인 ID" />
          </div>

          <div className={styles['input-group']}>
            <input className={styles['input-info']} type="password" name="password" placeholder="암호" />
          </div>
        </form>

        <div className={styles['submit-group']}>
          <p className={styles['forgetLink']}>
            <a className={styles['loginLink']} href="/access/passwordcheck">
              <span>암호를 잊어버린 경우</span>
            </a>
          </p>
          <div className={styles['login-btn-group']}>
            <button className={styles['login-btn']}>로그인</button>
          </div>
        </div>

        <div className={styles['signup']}>
          <p className={styles['noneLink']}>어카운트가 없는 분은</p>
          <a className={styles['loginLink']} href="/access/agesignup">
            <button className={styles['signup-btn']}>신규 작성</button>
          </a>
        </div>
      </div>
    </div>
  )
}
