import React, { useState } from 'react'
import styles from './index.modules.scss'
import Modal from '@/components/common/Modal'

export default function AddAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  //모달버튼열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className={styles.container}>
        <h1>계좌 연결</h1>
        <h6>하나 은행</h6>
        <h6>국민 은행</h6>
        <h6>우리 은행</h6>
        <h6>카카오 뱅크</h6>
        <h6>케이 뱅크</h6>
        <h6>신한 은행</h6>
      </div>
      <button className={styles.btn} onClick={handleModalOpen}>
        간편결제
      </button>
      <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
        <div> 안녕하세요 모달입니다.</div>
      </Modal>
    </>
  )
}
