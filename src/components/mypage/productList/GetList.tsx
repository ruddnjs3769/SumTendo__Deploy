import React, { useState, useEffect } from 'react'
import styles from './GetList.module.scss'
import GetItem from '@/components/mypage/productList/GetItem'
// import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
// import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { TransactionDetails, TransactionDetail } from '@/types/product'
import { Link } from 'react-router-dom'
import useUserInfo from '@/hooks/useUserInfo'
import { getTransactionDetails } from '@/apis/payment/product'

export default function GetList() {
  const [userInfo] = useUserInfo()
  const [purchasedProducts, setPurchasedProducts] = useState<TransactionDetails>([])
  const accessToken = localStorage.getItem('token') || ''

  useEffect(() => {
    getPurchaseHistory().then((res) => setPurchasedProducts(res))
    console.log(purchasedProducts)
  }, [])

  const getPurchaseHistory = async () => {
    try {
      const purchasedProducts = await getTransactionDetails(accessToken)
      return purchasedProducts
    } catch (e) {
      console.error(e)
    }
  }

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
        {purchasedProducts.map((item: TransactionDetail, index: number) => (
          <GetItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}
