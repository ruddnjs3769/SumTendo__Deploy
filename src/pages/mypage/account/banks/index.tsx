import React, { useState, useEffect } from 'react'
import Modal from '@/components/common/Modal'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'

import { AccountsBalance, Bank } from '@/types/account'
import { getConnectedAccounts } from '@/apis/payment/account'

export default function BankName() {
  // const [getItem, setGetItem] = useState<Products>([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [accounts, setAccounts] = useState<Bank[]>([])
  //accessToken 가져오기
  const accessToken = localStorage.getItem('token') || ''


  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true)
  }

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false)
  }

  // 연결된 계좌 정보 조회
  useEffect(() => {
    const fetchConnectedAccounts = async () => {
      try {
        const res = await getConnectedAccounts(accessToken)
        setAccounts(res.accounts)
      } catch (error) {
        console.error('등록된 계좌 조회 API 호출 중 오류가 발생했습니다:', error)
      }
    }
    fetchConnectedAccounts()
  }, [])


  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.inner}>
            <div className={styles.innerText}>
              <h1 className={styles.title}>{}은행</h1>
              <button onClick={handleDeleteModalOpen}>계좌 해지</button>
            </div>
            <div className={styles.bankAccount}>
              <div className={styles.bankNumber}>계좌 | {}은행</div>
              <div className={styles.bankAmount}>{}원</div>
              <div className={styles.bankUnderLine}>₩</div>
            </div>
          </div>
          <div className={styles.getList}>
            <hr className={styles.line} />
            <h1 className={styles.title}>거래 내역</h1>
            <div className={styles.item}>
              {/* {getItem.map((item: Product, index: number) => (
                <GetItem key={index} item={item} />
              ))} */}
            </div>
          </div>
        </div>
        {isDeleteModalOpen && (
          <Modal isOpen={isDeleteModalOpen} closeModal={handleDeleteModalClose}>
            <div className={styles.modalContainer}>
              <div className={styles.textContainer}>
                <img className={styles.bankLogo} src="" alt="" />
                <h1 className={styles.bankName}>국민 은행</h1>
                <h4 className={styles.modalText}>계좌를 해지하시겠습니까?</h4>
              </div>
              <div className={styles.btnContainer}>
                <button type="reset" onClick={handleDeleteModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
                  아니오
                </button>
                <button type="button" className={`${styles.btnTag} ${styles.enrolled}`}>
                  예
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  )
}
