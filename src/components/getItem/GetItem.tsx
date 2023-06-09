import React from 'react'
import styles from './GetItem.module.scss'

export default function GetItem() {
  return (
    <div className={styles.getItem_container}>
      <img className={styles.getItem_thumbnail} src="" alt="" />
      <a className={styles.getItem_title} href={'/detail/:productId'}>
        상품명
      </a>
    </div>
  )
}
