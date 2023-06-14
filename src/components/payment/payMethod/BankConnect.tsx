import React from 'react'
import styles from './BankConnect.module.scss'

interface Props {
  bankName: string
  bankCode: string
  bankDigits: number[]
}
/*
  {
    "name": "KB국민은행",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
*/
/*
  bankCode: string // 연결할 은행 코드 (필수!)
  accountNumber: string // 연결할 계좌번호 (필수!)
  phoneNumber: string // 사용자 전화번호 (필수!)
  signature: boolean // 사용자 서명 (필수!)
  */

export default function BankConnection({ bankName, bankCode, bankDigits }: Props) {
  let bankLogo = ''
  switch (bankName) {
    case 'KB국민은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbbank.svg`
      break
    case '신한은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/shbank.svg`
      break
    case '우리은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/wooribank.svg`
      break
    case '하나은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/hanabank.svg`
      break
    case '케이뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbank.svg`
      break
    case 'NH농협은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/nhbank.svg`
      break
    case '카카오뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kakaobank.svg`
      break
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}> 계좌 등록</div>
      <div className={styles.mainContainer}>
        <div className={styles.bankTitle}>
          <div className={styles.bankLogo}>
            <img className={styles.bankLogoImage} src={bankLogo} alt="로고" />
          </div>
          <div className={styles.bankName}>{bankName}</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>계좌번호</div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>전화번호</div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
