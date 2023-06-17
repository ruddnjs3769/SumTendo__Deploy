import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

import LinkedBank from '@/components/mypage/bank/LinkedBank'

import Sidebar from '@/components/mypage/nav/SideBar'
import { AccountsBalance } from '@/types/account'
import { Link, useNavigate } from 'react-router-dom'
import { Banks } from '@/types/account'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import dummyAccountsList from '@/pages/payment/dummyAccountsList.json'

export default function Account() {
  const { accounts }: AccountsBalance = dummyAccounts
  const accountsList: Banks = dummyAccountsList
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nextModal, setNextModal] = useState(false)
  const [bankIndex, setBankIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
  }, [])

  // 계좌 조회 버튼 핸들러
  const handleAccountsOpen = () => {
    setIsOpen(!isOpen)
  }
  // 선택계좌 결제하기 버튼 생성 핸들러
  const handleBankOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }

  //모달버튼열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleNextModal = (index: number) => {
    setNextModal(true)
    setBankIndex(index)
  }

  const selectedAccount = accountsList[bankIndex]

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.totallAccount}>
            <div className={styles.totale}>총 계좌 잔액</div>
            <div className={styles.totaleAmount}>`₩ 숫자 원`</div>
          </div>
          {/* 추가된 계좌들  */}
          <div className={styles.bankAccount}>
            <div className={styles.banks}>
              {accounts.map((account, index) => (
                <LinkedBank
                  key={index}
                  bankName={account.bankName}
                  accountNumber={account.accountNumber}
                  balance={account.balance}
                  handleOnClick={() => handleBankOnClick(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
            <div className={styles.addBank}>
              <Link className={styles.btn} to="/user/:username/account/addAccount" onClick={handleModalOpen}>
                계좌 추가
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
