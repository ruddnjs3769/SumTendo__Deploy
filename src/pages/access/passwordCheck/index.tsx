import React from 'react'
import styles from './index.module.scss'

export default function PasswordCheck() {
  return (
    <div className={styles.container}>
      <h1>닌텐도 어카운트</h1>
      <div className={styles['passwordChange-group']}>
        <h1>비밀번호 재설정</h1>
        <form action="">
          <div>
            <input type="email" name="email" placeholder="메일 주소/로그인 ID" />
          </div>

          <div>
            <input type="text" name="displayName" placeholder="닉네임" />
          </div>
        </form>
        <div>
          <div className={styles['changeCheck-button']}>
            <button>확인</button>
          </div>
        </div>
      </div>
    </div>
  )
}
