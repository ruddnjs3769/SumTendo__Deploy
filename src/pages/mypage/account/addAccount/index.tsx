import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import BankSelect from '@/components/mypage/bank/BankSelect'
import Sidebar from '@/components/mypage/nav/SideBar'
import { EnabledBank } from '@/types/account'
import { getSelectableAccounts } from '@/apis/payment/account'

// 선택 가능한 은행 목록 조회
export default function AddAccount() {
  const accessToken = localStorage.getItem('token') || ''
  const [accounts, setAccounts] = useState<EnabledBank[]>([])

  useEffect(() => {
    getSelectableAccounts(accessToken)
      .then((response: EnabledBank[]) => {
        setAccounts(response)
      })
      .catch((error: Error) => {
        console.error('전체 계좌 조회 API 호출 중 오류가 발생했습니다:', error)
      })
  }, [])

  const sortAccount = accounts.sort((a) => {
    return a.disabled ? 1 : -1
  })

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <h1 className={styles.title}>계좌 등록</h1>
          <hr className={styles.line} />
          <div className={styles.text}>추가할 계좌의 은행을 선택하세요.</div>
          <div className={styles.banks}>
            {sortAccount.map((aacount, index) => (
              <BankSelect
                key={index}
                name={aacount.name}
                code={aacount.code}
                digits={aacount.digits}
                disabled={aacount.disabled}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
