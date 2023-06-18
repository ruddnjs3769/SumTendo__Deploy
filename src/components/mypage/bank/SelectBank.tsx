import React, { useState } from 'react'
import styles from './SelectBank.module.scss'
// import { Banks, AccountsBalance } from '@/types/account'
import BankBtn from '@/components/common/BankBtn'
import Modal from '@/components/common/Modal'
// 이 파일에 버튼 클릭 이벤트 사용 + 모달창 띄우기

export default function SelectBank() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  // const dummyAccounts: AccountsBalance = {
  //   totalBalance: 12341234, // 사용자 계좌 잔액 총합
  //   accounts: []
  // }
  // const Banks : Banks{
  // // 사용자 계좌 정보
  // id: '1', // 계좌 ID
  // bankName: '-은행', // 은행 이름
  // bankCode: 12341234, // 은행 코드
  // accountNumber: "", // 계좌 번호
  // balance: 3333333, // 계좌 잔액
  // }

  // interface EnabledBank {
  //   name: string // 은행 이름
  //   code: string // 은행 코드
  //   digits: number[] // 은행 계좌 자릿수
  //   disabled: boolean // 사용자가 추가한 계좌 여부
  // }

  return (
    <div>
      <button className={styles.btn} onClick={handleModalOpen}>
        <BankBtn />
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
          <div className={styles.bankContainer}>
            <div className={styles.inner}>
              <h1 className={styles.name}>XXX 은행</h1>
              <hr />
              <div className={styles.innerBottom}>
                <ol className={styles.lists}>
                  <li className={styles.list}>
                    <label className={styles.label} htmlFor="text">
                      계좌번호
                    </label>
                    <form className={styles.inputForm}>
                      <input
                        id="text"
                        className={`${styles.inputTag} ${styles.displayName}`}
                        type="text"
                        name="text"
                        placeholder="계좌번호"
                        required
                      />
                    </form>
                  </li>
                  <li className={styles.list}>
                    <label className={styles.label} htmlFor="tel">
                      전화번호
                    </label>
                    <form className={styles.inputForm}>
                      <input
                        id="tel"
                        className={`${styles.inputTag} ${styles.email}`}
                        type="tel"
                        name="tel"
                        placeholder="{고객 tel 데이터}"
                        disabled
                        required
                      />
                    </form>
                  </li>
                </ol>
              </div>
              <hr />
              <button type="button">등록</button>
              <button type="reset">취소</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
