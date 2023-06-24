import React from 'react'
import styles from './index.module.scss'

export default function AgeSignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['age']}>
        <div className={styles['thirteenUnder']}>
          <a href="/access/signupform">
            <div className={styles['thirteen']}>
              <img src={process.env.PUBLIC_URL + '/images/access/13young.png'} alt="13young" />
              <span>13세 이하는 이곳</span>
            </div>
          </a>
        </div>
        <div className={styles['fourteenPlus']}>
          <a href="/access/signupform">
            <div className={styles['fourteen']}>
              <img src={process.env.PUBLIC_URL + '/images/access/13young.png'} alt="14older" />
              <span>14세 이상은 이곳</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
