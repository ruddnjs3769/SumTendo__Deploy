import React from 'react'
import styles from './GetList.module.scss'
import GetItem from '@/components/maypage/GetItem'

export default function GetList() {
  return (
    <div className={styles.section__list_title}>
      <span className={styles.get_list}>구매 내역</span>
      <a className={styles.get_list_more} href="#">
        전체 내역 조회
      </a>
      <div className={styles.get_item}>
        <GetItem />
        <GetItem />
        <GetItem />
        <GetItem />
      </div>
    </div>
  )
}
