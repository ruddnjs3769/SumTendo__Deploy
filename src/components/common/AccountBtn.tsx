import React from 'react'
import styles from './AccountBtn.module.scss'
// 이 파일로 '은행별' 계좌 잔액 조회 API 연동
// 은행 / 잔액
export default function Bank() {
  const banks = ['국민', '신한', 'NH농협', '케이', '하나', '우리', '카카오']

  return (
    <div className={styles.container}>
      <div className={styles.bank}>
        <div className={styles.bankLogo}>
          <img src="#" alt="logo" />
        </div>
        <div className={styles.bankInfo}>
          <div className={styles.bankName}>
            <span>{banks[0]}은행</span>
            <hr />
          </div>
          <div className={styles.changes}>
            <div className={styles.title}>잔액</div>
            <div className={styles.change}>3,000,000 원</div>
          </div>
        </div>
      </div>
    </div>
  )
}
