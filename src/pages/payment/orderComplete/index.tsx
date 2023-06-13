import React from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import Btn from '@/components/payment/Btn'

export default function OrderComplete() {
  return (
    <>
      <PayProcessFlow />
      <div className={styles.orderer}>
        <div className={styles.orderInfo}>주문 완료</div>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <span>주문 번호</span>
            </div>
            <div className={styles.title}>
              <span>상품명</span>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <span>12341512312</span>
            </div>
            <div className={styles.content}>
              <span>젤다의전설:왕국의 눈물</span>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Btn text="주문내역 확인하기" targetURL="/user/:username" />
          </div>
        </div>
      </div>
      <Btn text="계속 쇼핑하기" targetURL="/" />
    </>
  )
}
