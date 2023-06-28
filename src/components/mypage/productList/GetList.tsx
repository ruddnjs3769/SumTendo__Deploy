import React, { useState, useEffect } from 'react'
import styles from './GetList.module.scss'
import GetItem from '@/components/mypage/productList/GetItem'
import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { Products, Product } from '@/types/product'
import { Link } from 'react-router-dom'
import useUserInfo from '@/hooks/useUserInfo'

export default function GetList() {
  const [userInfo] = useUserInfo()
  const [getItem, setGetItem] = useState<Products>([])

  useEffect(() => {
    const storedJjimItems = localStorage.getItem('getItem')
    if (storedJjimItems) {
      setGetItem(JSON.parse(storedJjimItems))
    } else {
      localStorage.setItem('getItem', JSON.stringify([dummyGoods1, dummyGoods2]))
      setGetItem([dummyGoods1, dummyGoods2])
    }
  }, [])

  return (
    <div className={styles.section}>
      <span className={styles.getList}>구매 내역</span>
      <button className={`${styles.btn} ${styles.getMore}`}>
        {/* 내일 Navigate으로 바꾸기 */}
        <Link className={styles.aTag} to={`/user/${userInfo.displayName}/getItemAll`}>
          구매 내역 조회
        </Link>
      </button>
      <ul className={styles.getItem}>
        {getItem.map((item: Product, index: number) => (
          <GetItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}
