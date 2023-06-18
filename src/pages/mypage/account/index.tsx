import React from 'react'
import styles from './index.module.scss'
// import LinkedBank from '@/components/mypage/bank/LinkedBank'
import Sidebar from '@/components/mypage/nav/SideBar'
import { Link } from 'react-router-dom'
import SelectAccount from '@/components/mypage/bank/SelectAccount'


export default function Account() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.totallAccount}>
            <div className={styles.totale}>총 계좌 잔액</div>
            <div className={styles.totaleAmount}>1,000,000 원</div>
            <div className={styles.underLine}>₩</div>
          </div>
          {/* 추가된 계좌 + 계좌 추가 버튼 영역 */}
          <div className={styles.bankAccount}>
            <div className={styles.banks}>
              <SelectAccount />
              <SelectAccount />
              <SelectAccount />
              <SelectAccount />
              <SelectAccount />
              <SelectAccount />
              <SelectAccount />
              <Link className={styles.addBank} to="/user/:username/account/addAccount">
                <div className={styles.btn}>
                  <span>+</span>
                  <span className={styles.add}>계좌 추가</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
