import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import SideBarItem from '@/components/mypage/nav/SideBarItem'
import GetItemMore from '@/components/mypage/productList/GetItemMore'
// import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
// import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { TransactionDetails, TransactionDetail } from '@/types/product'
import { getTransactionDetails } from '@/apis/payment/product'

export default function GetItemAll() {
  const [purchasedProducts, setPurchasedProducts] = useState<TransactionDetails>([])
  const accessToken = localStorage.getItem('token') || ''

  useEffect(() => {
    getPurchaseHistory().then((res) => setPurchasedProducts(res))
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
    <>
      <div className={styles.container}>
        <SideBarItem />
        <section className={styles.section}>
          <span className={styles.title}>구매 내역</span>
          <hr className={styles.line} />
          <div>
            <ul className={styles.jjimItem}>
              {purchasedProducts
                ? purchasedProducts.map((item: TransactionDetail, index: number) => (
                    <GetItemMore key={index} item={item} />
                  ))
                : null}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
