import React from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'

export default function CheckOrder() {
  return (
    <div className={styles.container}>
      <h1>주문을 검토하세요!!!!</h1>
      <PayProcessFlow />
    </div>
  )
}
