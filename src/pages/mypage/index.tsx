import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import GetList from '@/components/mypage/productList/GetList'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'

// userInfo는 제가 맘대로 지정해놓은 것이고, 원하는 변수명으로 사용하시면 됩니다!

export default function MyPage() {
  const [userInfo, setUserInfo] = useRecoilState(userState)

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.inner}>
            <ul className={styles.mainLists}>
              <li className={`${styles.listTitle} ${styles.account}`}>
                계좌
                <div className={styles.listText}>
                  <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account`}>
                    계좌조회
                  </Link>
                  <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account/addAccount`}>
                    계좌추가
                  </Link>
                </div>
              </li>
              <li className={`${styles.listTitle} ${styles.checkInfo}`}>
                장바구니
                <button className={`${styles.btn} ${styles.listText}`}>
                  <Link className={`${styles.aTag} ${styles.listLink}`} to={'/payment/:username'}>
                    🛒 장바구니
                  </Link>
                </button>
              </li>
              <li className={`${styles.listTitle} ${styles.Items}`}>
                주문 상품
                <div className={styles.listText}>
                  <button className={`${styles.aTag} ${styles.btn} ${styles.listLink} ${styles.visible}`}>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={'/user/:username/getItemAll'}>
                      💰 주문 상품
                    </Link>
                  </button>
                </div>
              </li>
            </ul>
            <hr className={styles.line} />
            <GetList />
          </div>
        </section>
      </div>
    </>
  )
}
