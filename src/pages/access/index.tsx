import React from 'react'
import styles from './index.module.scss'

export default function Access() {
  return (
    <div className={styles.container}>
      <h1>닌텐도 어카운트</h1>
      <div className={styles['select']}>
        <div className={styles['info']}>
          가지고 계신 닌텐도 어카운트로 로그인하거나,
          <br /> 어카운트를 새로 작성해 주십시오.
        </div>
        <div className={styles['accountform']}>
          <div className={styles['has-account']}>
            <h3>어카운트가 있는 분</h3>
            <a href="/access/login">
              <button>로그인</button>
            </a>
          </div>
          <div className={styles['non-account']}>
            <h3>어카운트가 없는 분</h3>
            <a href="/access/agesignup">
              <button>신규작성</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
