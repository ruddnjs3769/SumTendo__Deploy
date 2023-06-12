import React, { useState } from 'react'
import styles from './index.module.scss'
import { User } from '@/types/user'
import { Product } from '@/types/product'
import Nav from '@/components/maypage/Nav'
import GetList from '@/components/maypage/GetList'
import JjimList from '@/components/maypage/JjimList'

export default function MyPage() {
  const [visible, setVisible] = useState(true)
  const handleVisible = () => {
    setVisible(!visible)
  }

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: 'https://placeimg.com/640/480/animals' // 사용자 프로필 이미지 URL
  }

  const dummyProduct: Product = {
    // 제품 정보
    id: 'cFmeC7aY5KjZbBAdJE9y', // 제품 ID
    title: '삼성전자 스마트모니터 M7 S43AM700', // 제품 이름
    price: 639000, // 제품 가격
    description: '107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD)',
    // 제품 설명(최대 100자)
    tags: ['가전', '모니터', '컴퓨터'], // 제품 태그
    thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png', // 제품 썸네일 이미지(URL)
    isSoldOut: false, // 제품 매진 여부
    discountRate: 20 // 제품 할인율
  }

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.container__section}>
          {visible && (
            <div className={styles.container__section__inner}>
              <ul className={styles.section__lists}>
                <li className={`${styles.section__list_title} ${styles.account}`}>
                  계좌
                  <div className={styles.section__list_text}>
                    <a href={`/user/:username/account`}>계좌조회</a>
                    <a href={`/user/:username/account/addAccount`}>계좌추가</a>
                  </div>
                </li>
                <li className={`${styles.section__list_title} ${styles.checkInfo}`}>
                  장바구니
                  <div className={styles.section__list_text}>
                    <a href={'/payment/:username/checkInfo'}>장바구니</a>
                  </div>
                </li>
                <li className={`${styles.section__list_title} ${styles.jjimItems}`}>
                  {visible ? '찜한 상품' : '구매 내역'}
                  <div className={styles.section__list_text}>
                    <a onClick={handleVisible} href="#">
                      {visible ? '찜한 상품' : '구매 내역'}
                    </a>
                  </div>
                </li>
              </ul>
              <hr />
              <GetList />
            </div>
          )}
          {!visible && (
            <div className={styles.container__section__inner}>
              <ul className={styles.section__lists}>
                <li className={`${styles.section__list_title} ${styles.account}`}>
                  계좌
                  <div className={styles.section__list_text}>
                    <a href={`/user/:username/account`}>계좌조회</a>
                    <a href={`/user/:username/account/addAccount`}>계좌추가</a>
                  </div>
                </li>
                <li className={`${styles.section__list_title} ${styles.checkInfo}`}>
                  장바구니
                  <div className={styles.section__list_text}>
                    <a href={'/payment/:username/checkInfo'}>장바구니</a>
                  </div>
                </li>
                <li className={`${styles.section__list_title} ${styles.jjimItems}`}>
                  {visible ? '찜한 상품' : '구매 내역'}
                  <div className={styles.section__list_text}>
                    <a onClick={handleVisible} href="#">
                      {visible ? '찜한 상품' : '구매 내역'}
                    </a>
                  </div>
                </li>
              </ul>
              <hr />
              <JjimList />
            </div>
          )}
        </section>
      </div>
    </>
  )
}
