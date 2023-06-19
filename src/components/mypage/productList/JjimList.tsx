import React from 'react'
import styles from './JjimList.module.scss'
import JjimItem from '@/components/mypage/productList/JjimItem'

export default function JjimList() {
  return (
    <section className={styles.section}>
      <span className={styles.jjimList}>찜한 상품</span>
      <a className={`${styles.aTag} ${styles.jjimMore}`} href={'/user/:username/jjimItemAll'}>
        전체 내역 조회
      </a>
      <div className={styles.jjimItem}>
        <JjimItem />
        <JjimItem />
        <JjimItem />
        <JjimItem />
      </div>
    </section>
  )
}
