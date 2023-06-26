// import BankBtn from '@/components/common/BankBtn'
import React, { useState } from 'react'
import styles from './SelectBank.module.scss'
import Modal from '@/components/common/Modal'
import { getBankLogo } from '@/components/payment/payMethod/PossibleBank'

interface EnabledBank {
  name: string // 은행 이름
  code: string // 은행 코드
  digits?: number[] // 은행 계좌 자릿수
  disabled: boolean // 사용자가 추가한 계좌 여부
}

export default function SelectBank({ name, code, disabled }: EnabledBank) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  //bankLogo 가져오기
  const bankLogo = getBankLogo(name)
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  // interface EnabledBank {
  //   name: string // 은행 이름
  //   code: string // 은행 코드
  //   digits: number[] // 은행 계좌 자릿수
  //   disabled: boolean // 사용자가 추가한 계좌 여부
  // }

  return (
    <>
      <button className={styles.btn} onClick={handleModalOpen} disabled={disabled}>
        <div className={styles.container}>
          <div className={styles.bank}>
            <div className={styles.bankLogo}>
              <img src={bankLogo} alt="logo" />
            </div>
            <div className={styles.bankInfo}>
              <span className={styles.bankName}>{name}</span>
              <span className={styles.bankId}>{code}</span>
            </div>
          </div>
        </div>
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
          <div className={styles.modalContainer}>
            <div className={styles.textContainer}>
              <img className={styles.bankLogo} src={bankLogo} alt="" />
              <h1 className={styles.bankName}>{name}</h1>
            </div>
            <hr className={styles.line} />
            <ol className={styles.listsContainer}>
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
                  <span className={styles.errorMsg}>계좌번호를 확인해 주세요.</span>
                </form>
              </li>
              <li className={styles.list}>
                <label className={styles.label} htmlFor="tel">
                  전화번호
                </label>
                <form className={styles.inputForm}>
                  <input
                    id="tel"
                    className={`${styles.inputTag} ${styles.tel}`}
                    type="tel"
                    name="tel"
                    placeholder="{고객 tel 데이터}"
                    required
                  />
                  <span className={styles.errorMsg}>전화번호를 확인해 주세요.</span>
                </form>
              </li>
            </ol>
            <hr className={styles.line} />
            <div className={styles.btnContainer}>
              <button type="reset" onClick={handleModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
                취소
              </button>
              <button type="button" className={`${styles.btnTag} ${styles.enrolled}`}>
                등록
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
