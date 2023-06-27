// import BankBtn from '@/components/common/BankBtn'
import React, { useState } from 'react'
import styles from './BankSelect.module.scss'
import Modal from '@/components/common/Modal'
import getBankLogo from '@/utils/getBankLogo'
import { ACCOUNT_NUMBER_REGEX, PHONE_NUMBER_REGEX, PHONE_NUMBER_FORMAT_REGEX } from '@/utils/constants'

interface EnabledBank {
  name: string // 은행 이름
  code: string // 은행 코드
  digits: number[] // 은행 계좌 자릿수
  disabled: boolean // 사용자가 추가한 계좌 여부
}

export default function BankSelect({ name, code, digits, disabled }: EnabledBank) {
  const bankLogo = getBankLogo(name)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [accountNum, setAccountNum] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const inputHandlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const phoneNumber = e.target.value
    // 0. 입력된 숫자만 추출하여 문자열 생성
    // 1. PHONE_NUMBER_REGEX는 전화번호에서 숫자 이외의 문자를 찾기 위한 정규식 패턴
    // 2. 문자들은 '제거'하여 숫자만을 추출
    const inputDigitsNum = phoneNumber.replace(PHONE_NUMBER_REGEX, '')

    // 0. 문자열 형식 설정
    const formateDigitsNum = inputDigitsNum.slice(0, 11).replace(PHONE_NUMBER_FORMAT_REGEX, '$1-$2-$3')
    setPhoneNum(formateDigitsNum)
  }

  const inputHandleAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const accountNum = e.target.value
    const inputAccountNum = accountNum.replace(ACCOUNT_NUMBER_REGEX, '')
    let formateDigitsNum = ''
    let currentIndex = 0

    for (let i = 0; i < digits.length; i++) {
      // digits[]의 인덱싱 변수로 설정
      // 'currentIndex'부터 'currentIndex+digitCount'범위까지의 부분 문자열 추출
      const digitCount = digits[i]
      const indexDigit = inputAccountNum.slice(currentIndex, currentIndex + digitCount)
      if (indexDigit.length > 0) {
        formateDigitsNum += indexDigit

        if (i < digits.length - 1) {
          formateDigitsNum += '-'
        }
        currentIndex += digitCount
      }
    }
    setAccountNum(formateDigitsNum)
  }

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
                <label className={styles.label} htmlFor="account">
                  계좌번호
                </label>
                <form className={styles.inputForm}>
                  <input
                    id="account"
                    className={`${styles.inputTag} ${styles.displayName}`}
                    type="text"
                    name="account"
                    value={accountNum}
                    onChange={inputHandleAccount}
                    placeholder="계좌번호를 입력해주세요."
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
                    type="text"
                    name="tel"
                    value={phoneNum}
                    onChange={inputHandlePhone}
                    placeholder="전화번호를 입력해주세요."
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
