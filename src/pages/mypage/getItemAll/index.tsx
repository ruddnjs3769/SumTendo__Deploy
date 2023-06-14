import React from 'react'
import styles from './index.module.scss'

export default function GetItemAll() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <h1>전체 주문내역 조회</h1>
          <button>확인</button>
        </section>
      </div>
    </>
  )
}
