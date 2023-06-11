import React from 'react'
import styles from './index.module.scss'

export default function LogIn() {
  return (
    <div className={styles.container}>
      <h1>닌텐도 어카운트</h1>
      <div className={styles['login-group']}>
        <form action="">
          <div>
            <input type="email" name="email" placeholder="메일 주소/로그인 ID" />
          </div>

          <div>
            <input type="password" name="password" placeholder="암호" />
          </div>
        </form>

        <div className={styles['loginAndSignup']}>
          <p>
            <a href="/access/passwordcheck">
              <span>암호를 잊어버린 경우</span>
            </a>
          </p>
          <div>
            <button>로그인</button>
          </div>
        </div>

        <div className={styles['signup']}>
          <p>어카운트가 없는 분은</p>
          <a href="/access/agesignup">
            <button>신규 작성</button>
          </a>
        </div>
      </div>
    </div>
  )
}
