import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

export default function UserHeader() {
  return (
    <>
      <div className={styles.header_Logo}>
        <Link to="/search">
          <span className={styles.header_Logo_img}>숨텐도 로고</span>
        </Link>
      </div>
      <span className={styles.header}>
        <h1>User Header : </h1>
        <span>57px 임의의 높이 | </span>
        <span>57px 임의의 높이 | </span>
        <span>57px 임의의 높이 | </span>
        <span>57px 임의의 높이</span>
      </span>
    </>
  )
}
