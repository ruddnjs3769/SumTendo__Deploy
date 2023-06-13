import React from 'react'
import styles from './JjimItem.module.scss'

export default function JjimItem() {
  return (
    <a className={`${styles.aTag} ${styles.jjim_item_container}`} href={'/detail/:productId'}>
      <div className={styles.jjim_item_thumbnail}>
        <img
          className={styles.imgTag}
          src="https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/b/6/b6bc7bd67a7ea937ea28b6383752d88a7628afb1c1ef196b1f83659c4447fa85.jpg"
          alt=""
        />
      </div>
      <span className={`${styles.spanTag} ${styles.jjim_item_title}`}>젤다 젤다 왕눈!왕국의 눈물!</span>
      <span className={`${styles.spanTag} ${styles.jjim_item_price}`}>74,800원</span>
    </a>
  )
}
