import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Link, useLocation } from 'react-router-dom'
import dummyVerifyedUser from '@/pages/payment/dummyVerifiedUser.json'

export default function UserHeader() {
  const [currentTitle, setCurrentTitle] = useState('')
  const currentLocation = useLocation().pathname
  const [cartItemCount, setCartItemCount] = useState(0)
  const [isUserClicked, setIsUserClicked] = useState(false)
  const [isLogined, setIsLogined] = useState(false) // 얘를 recoil로 상태관리해야할까요?

  // 유저 정보 받아오기
  const accessToken = localStorage.getItem('accessToken')
  // 1.여기서 accessToken으로 api 호출해서 user정보 확인을 해야할지?
  // 2.아니면 user정보를 통째로 localStorage에 저장할지?

  // 1.의 경우
  const fetchUserInfo = () => {
    // 가상의 api 호출함수 verifyUser(accessToken) 호출
    // 받아온 userData return
    // 임시로 dummyVerifyedUser.json 사용하겠음
    return dummyVerifyedUser.displayName
  }

  const userName = fetchUserInfo()

  const handleUserClick = () => {
    setIsUserClicked(!isUserClicked)
  }
  // 스토리지에 access토큰이 변경될때 핸들링 이벤트
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'accessToken') {
      setIsLogined(!!localStorage.getItem('accessToken'))
    }
  }

  // 랜딩 시
  useEffect(() => {
    setCartItemCount(JSON.parse(localStorage.getItem('cart') || '[]').length)
    setIsUserClicked(false)
  }, [])

  // fetchUserInfo 는 isLogined 감시해서 true면 호출
  useEffect(() => {
    if (isLogined) {
      fetchUserInfo()
    }
  }, [isLogined])

  useEffect(() => {
    if (accessToken) {
      setIsLogined(true)
    } else {
      setIsLogined(false)
    }
  }, [accessToken])

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

  //로컬 스토리지에 이벤트 리스너 추가.
  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

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
          <div className={styles.userInfo} style={{ display: isLogined ? 'flex' : 'none' }}>
            <div className={styles.userPage} onClick={handleUserClick}>
              <div className={styles.userImg}>
                <img
                  className={styles.img}
                  src={`${process.env.PUBLIC_URL}/images/person-circle.svg`}
                  alt="profileImg"
                />
              </div>
              <div className={styles.userName}>이름</div>
              <ul className={styles.userNavList} style={{ display: isUserClicked ? 'block' : 'none' }}>
                <Link to={`/user/${userName}`} style={{ textDecoration: 'none' }}>
                  <li className={styles.userNav}>
                    <span className={styles.userNavSpan}>마이페이지</span>
                  </li>
                </Link>
                <Link to={'/access/logout'} style={{ textDecoration: 'none' }}>
                  <li className={styles.userNav}>
                    <span className={styles.userNavSpan}>로그아웃</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className={styles.shoppingCart}>
              <Link className={styles.link} to={`/payment/${userName}`}>
                <span className={styles.icon}>
                  <img
                    className={styles.iconImg}
                    src={`${process.env.PUBLIC_URL}/images/shopping_cart_icon.svg`}
                    alt=""
                  />
                </span>
                <span className={styles.count}>{`(${cartItemCount})`}</span>
              </Link>
            </div>
          </div>
          <div style={{ display: !isLogined ? 'block' : 'none' }}>
            <Link to="/access/login" className={styles.logInLink}>
              <span>로그인하기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
