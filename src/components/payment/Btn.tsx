import React from 'react'
import styles from './Btn.module.scss'
export default function Btn() {
  return (
    <div>
      <div className={styles.container}>
        <button className={styles.btn}>확인</button>
      </div>
    </div>
  )
}
