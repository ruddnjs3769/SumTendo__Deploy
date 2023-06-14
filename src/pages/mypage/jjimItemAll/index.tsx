import React from 'react'
import styles from './index.module.scss'

export default function JjimItemAll() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <h1>전체 찜한상품 조회</h1>
          <button>확인</button>
        </section>
      </div>
    </>
  )
}
