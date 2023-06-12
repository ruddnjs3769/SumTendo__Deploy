import React from 'react'
import styles from './GetItem.module.scss'

export default function GetItem() {
  return (
    <a className={styles.get_item_container} href={'/detail/:productId'}>
      <div className={styles.get_item_thumbnail}>
        <img
          src="https://store.nintendo.co.kr/media/catalog/product/cache/559013652f8c31ac036888adc145c37f/f/i/file.jpg"
          alt=""
        />
      </div>
      <span className={styles.get_item_title}>젤다 젤다 야숨!야생의 숨결!</span>
      <span className={styles.get_item_price}>72,000원</span>
    </a>
  )
}
