// import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import { Link } from 'react-router-dom'
import ConnectedAccount from '@/components/mypage/bank/ConnectedAccount'
import { AccountsBalance, Bank } from '@/types/account'
import { getConnectedAccounts } from '@/apis/payment/account'

//사용되는 api 계좌 목록 및 잔액 조회
// curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account
//  \ -X 'GET'
//  \ -H 'Authorization: Bearer <accessToken>'

// 계좌 조회 페이지에서 첫 화면에 연결된 계좌가 조회 되어야 함. [ ]
// 연결된 계좌의 목록 및 잔액 조회                       [ ]
// interface AccountsBalance {
//   totalBalance: number // 사용자 계좌 잔액 총합
//   accounts: Bank[] // 사용자 계좌 정보 목록
// }

export default function Account() {
  const [accounts, setAccounts] = useState<Bank[]>([])
  const [totalBalance, setTotalBalance] = useState(0)
  //accessToken 가져오기
  const accessToken = localStorage.getItem('token') || ''

  // 잔액 조회 목록
  useEffect(() => {
    getConnectedAccounts(accessToken)
      .then((response: AccountsBalance) => {
        const { totalBalance, accounts } = response
        setTotalBalance(totalBalance)
        setAccounts(accounts)
      })
      .catch((error: Error) => {
        console.error('등록된 계좌 조회 API 호출 중 오류가 발생했습니다:', error)
      })
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        {/* 전체 잔액 */}
        <div className={styles.bankContainer}>
          <div className={styles.totallAccount}>
            <div className={styles.totale}>💰 총 계좌 잔액</div>
            <div className={styles.totaleAmount}>{totalBalance.toLocaleString()}원</div>
            <div className={styles.underLine}>₩</div>
          </div>
          {/* 추가된 계좌 + 계좌 추가 버튼 영역 */}
          <div className={styles.bankAccount}>
            <div className={styles.banks}>
              <Link className={styles.linkedBank} to="/user/:username/account/banks/:bankName">
                {accounts.map((account, index) => (
                  <ConnectedAccount
                    key={index}
                    bankName={account.bankName}
                    accountNumber={account.accountNumber}
                    balance={account.balance}
                    // handleOnClick={someFunction} // 적절한 함수로 대체해야 합니다.
                    // isActive={someCondition} // 적절한 조건으로 대체해야 합니다.
                  />
                ))}
              </Link>
              <Link className={styles.addBank} to="/user/:username/account/addAccount">
                <div className={styles.btn}>
                  <span className={styles.plus}>+</span>
                  <span className={styles.add}>계좌 추가</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
