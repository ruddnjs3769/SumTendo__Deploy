import React from 'react'
import styles from './JjimList.module.scss'
import JjimItem from '@/components/maypage/JjimItem'

export default function JjimList() {
  return (
    <div className={styles.section__list_title}>
      <span className={styles.jjim_list}>찜한 상품</span>
      <a className={styles.jjim_list_more} href="#">
        전체 내역 조회
      </a>
      <div className={styles.jjim_item}>
        <JjimItem />
        <JjimItem />
        <JjimItem />
        <JjimItem />
      </div>
    </div>
  )
}
