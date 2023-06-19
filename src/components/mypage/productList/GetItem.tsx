import React from 'react'
import styles from './GetItem.module.scss'

export default function GetItem() {
  return (
    <a className={`${styles.aTag} ${styles.container}`} href={'/detail/:productId'}>
      <div className={styles.itemThumbnail}>
        <img
          className={styles.itemImg}
          src="https://store.nintendo.co.kr/media/catalog/product/cache/559013652f8c31ac036888adc145c37f/f/i/file.jpg"
          alt=""
        />
      </div>
      <span className={`${styles.spanTag} ${styles.itemTitle}`}>젤다 젤다 야숨!야생의 숨결!</span>
      <span className={`${styles.spanTag} ${styles.itemPrice}`}>72,000원</span>
    </a>
  )
}
