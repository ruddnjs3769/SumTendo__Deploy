import React from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ShoppingCart from '@/components/payment/ShoppingCart'
import Btn from '@/components/payment/Btn'

export default function CheckInfo() {
  return (
    <div className={styles.container}>
      <PayProcessFlow />
      <div className={styles.orderer}>
        <div className={styles.orderInfo}>주문자 정보</div>
        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              <span>주문자</span>
            </div>
            <div className={styles.title}>
              <span>이메일</span>
            </div>
          </div>
          <div>
            <div className={styles.content}>
              <span>김숨막</span>
            </div>
            <div className={styles.content}>
              <span>summak@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <ShoppingCart />
      <div className={styles.totals}>
        <div className={styles.mark}>
          <span>합계</span>
        </div>
        <div className={styles.price}>
          <span>19,990</span>
        </div>
      </div>
      <Btn />
    </div>
  )
}
