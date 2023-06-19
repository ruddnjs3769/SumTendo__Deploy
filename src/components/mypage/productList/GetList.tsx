import React from 'react'
import styles from './GetList.module.scss'
import GetItem from '@/components/mypage/productList/GetItem'

export default function GetList() {
  return (
    <div className={styles.section}>
      <span className={styles.getList}>구매 내역</span>
      <a className={`${styles.aTag} ${styles.getMore}`} href={'/user/:username/getItemAll'}>
        전체 내역 조회
      </a>
      <div className={styles.getItem}>
        <GetItem />
        <GetItem />
        <GetItem />
        <GetItem />
      </div>
    </div>
  )
}
