import React from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import Bank from '@/components/common/Bank'

export default function PayMethod() {
  return (
    <div className={styles.container}>
      <PayProcessFlow />
      <div className={styles.inner}>
        <div className={styles.bankSelect}>
          <div>
            <Bank />
          </div>
        </div>
        <div className={styles.payments}>
          <div className={styles.payment}>
            <div className={styles.paymentContainer}>결제 금액</div>
            <div className={styles.paymentInfo}>
              <div>
                <div className={styles.title}>
                  <span>주문 금액</span>
                </div>
                <div className={styles.title}>
                  <span>배송비</span>
                </div>
                <div className={styles.title}>
                  <span>할인</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <span>19,990</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>0원</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>19,990</span>
              </div>
            </div>
          </div>
          <div className={styles.payMethod}>
            <div className={styles.title}>
              <span>결제 수단</span>
            </div>
            <div className={styles.payMethodContainer}>
              <button className={styles.btn}>계좌조회</button>
              <button className={styles.btn}>간편결제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
