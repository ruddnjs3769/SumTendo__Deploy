import React from 'react'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import GetItem from '@/components/mypage/productList/GetItem'

export default function BankName() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.inner}>
            <div className={styles.name}>
              <h1 className={styles.title}>XXX 은행</h1>
              <button>계좌 해지</button>
            </div>
            <div className={styles.bankAccount}>
              <div className={styles.number}>계좌 | XXX-XXXX-XXX</div>
              <div className={styles.totaleAmount}>3,000,000 원</div>
              <div className={styles.underLine}>₩</div>
            </div>
          </div>
          <div className={styles.getList}>
            <hr className={styles.line} />
            <h1 className={styles.title}>거래 내역</h1>
            <div className={styles.item}>
              <GetItem />
              <GetItem />
              <GetItem />
              <GetItem />
              <GetItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
