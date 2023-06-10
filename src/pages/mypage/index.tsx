import React from 'react'
import styles from './index.module.scss'
import { User } from '@/types/user'
import { Product } from '@/types/product'
import GetItem from '@/components/getItem/GetItem'

export default function MyPage() {
  //(React) 아이콘 사용하기
  //https://eunhee-programming.tistory.com/206

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
        <nav className={styles.sidebar}>
          <div className={`${styles.sidebar} ${styles.inner}`}>
            <img src={dummyUser.profileImg} alt="" />
            <h3>{dummyUser.displayName}</h3>
            <span>{dummyUser.email}</span>
            <a href={`/user/:username/certProfile`}>정보 수정하기</a>
          </div>
        </nav>
        <section className={styles.my_page}>
          <div className={styles.my_page_container}>
            <ul className={styles.my_lists}>
              <li className={`${styles.my_list} ${styles.account}`}>
                계좌
                <div className={styles.lists}>
                  <a href={`/user/:username/account`}>계좌조회</a>
                  <a href={`/user/:username/account/addAccount`}>계좌추가</a>
                </div>
              </li>
              <li className={`${styles.my_list} ${styles.checkInfo}`}>
                장바구니
                <div className={styles.lists}>
                  <a href={'/payment/:username/checkInfo'}>장바구니</a>
                </div>
              </li>
              <li className={`${styles.my_list} ${styles.jjimItems}`}>
                찜한 상품
                <div className={styles.lists}>
                  <a href={`/user/:username/jjimItems`}>찜한 상품</a>
                </div>
              </li>
            </ul>
            <hr />
            <div className={`${styles.my_list} ${styles.list_getItems}`}>
              <span className={styles.list}>구매내역</span>
              <a className={styles.list_more}> 전체 내역 조회</a>
              <div className={styles.getItem}>
                <GetItem />
                <GetItem />
                <GetItem />
                <GetItem />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
