import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Link, useLocation } from 'react-router-dom'

export default function UserHeader() {
  const [currentTitle, setCurrentTitle] = useState('')
  const currentLocation = useLocation().pathname
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    setCartItemCount(JSON.parse(localStorage.getItem('cart') || '[]').length)
  }, [])
  // 숨텐도 옆에 현재 페이지의 타이틀을 대야함 ex) 결제, 마이페이지, 회원가입 || 더 세분화하면 결제 --각페이지 이름 , 마이페이지 --각페이지 이름, 회원가입 -- 각페이지 이름
  // currentLocation이, url 주소에 있는 특정 단어를 포함하고 있으면 currentTitle이 바뀐다.

  // 1.state currentTitle 을 선언. setCurrentTitle을 통해 바꾼다.
  // 2. currentLocation을 통해 현재 라우트 주소 받아오기
  // 3. 현재 라우트 주소에 해당 단어가 포함되어있는지 찾아보기
  // 4. 포함되어 있다면, 경우에 따라 setCurrentTitle로 currentTitle을 바꾸기.

  // 어떻게?
  // includes 메서드로 현재 로케이션에 'payment', 'user', 'access'가 포함되어있는지 확인
  // 그냥 쓰면 무한루프가 발생하므로 useEffect를 쓰자

  useEffect(() => {
    if (currentLocation.includes('payment')) setCurrentTitle('결제')
    if (currentLocation.includes('user')) setCurrentTitle('마이페이지')
    if (currentLocation.includes('access')) setCurrentTitle('인증')
  }, [currentLocation])

  return (
    <div className={styles.container}>
      <div className={styles.header_Logo}>
        <Link to="/search">
          <span className={styles.header_Logo_img}>
            <img className={styles.logoImg} src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="" />
          </span>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.titles}>
          <div className={styles.mainTitle}>숨텐도</div>
          <div className={styles.subTitle}>{currentTitle}</div>
          <div className={styles.userInfo}>
            <div className={styles.userPage}>
              <div className={styles.userImg}>
                <img
                  className={styles.img}
                  src="https://store.nintendo.co.kr/static/version1686546216/frontend/Ecomitize/nintendo/ko_KR/images/mii-default.png"
                  alt="profileImg"
                />
              </div>
              <div className={styles.userName}>이름</div>
            </div>
            <div className={styles.shoppingCart}>
              <a className={styles.link} href="#">
                <span className={styles.icon}>
                  <img
                    className={styles.iconImg}
                    src={`${process.env.PUBLIC_URL}/images/shopping_cart_icon.svg`}
                    alt=""
                  />
                </span>
                <span className={styles.count}>{`(${cartItemCount})`}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
