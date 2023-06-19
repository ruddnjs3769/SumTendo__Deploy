import React, { useState } from 'react'
import Modal from '@/components/common/Modal'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import GetItem from '@/components/mypage/productList/GetItem'

export default function BankName() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.inner}>
            <div className={styles.innerText}>
              <h1 className={styles.title}>XXX 은행</h1>
              <button onClick={handleModalOpen}>계좌 해지</button>
            </div>
            <div className={styles.bankAccount}>
              <div className={styles.number}>계좌 | XXX-XXXX-XXX</div>
              <div className={styles.totaleAmount}>3,000,000 원</div>
              <div className={styles.underLine}>₩</div>
            </div>
          </div>
          <div className={styles.getList}>
            <hr className={styles.line} />
            <h1 className={styles.title}>거래 내역</h1>
            <div className={styles.item}>
              <GetItem />
              <GetItem />
              <GetItem />
              <GetItem />
              <GetItem />
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
            <div className={styles.modalContainer}>
              <div className={styles.textContainer}>
                <img className={styles.bankLogo} src="" alt="" />
                <h1 className={styles.bankName}>국민 은행</h1>
                <h4 className={styles.modalText}>계좌를 해지하시겠습니까?</h4>
                <h1 className={styles.bankName}>모달 사이즈 무슨일...?</h1>
              </div>
              <div className={styles.btnContainer}>
                <button type="reset" onClick={handleModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
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
