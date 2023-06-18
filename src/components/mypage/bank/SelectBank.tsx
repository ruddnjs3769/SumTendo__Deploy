import React from 'react'
import styles from './SelectBank.module.scss'
// import { Banks, AccountsBalance } from '@/types/account'
import BankBtn from '@/components/common/BankBtn'

// 이 파일에 버튼 클릭 이벤트 사용 + 모달창 띄우기

export default function SelectBank() {
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
    <button className={styles.btn}>
      <BankBtn />
    </button>
  )
}
