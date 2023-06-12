import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import Bank from '@/components/payment/Bank'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'

export default function PayMethod() {
  const { accounts }: AccountsBalance = dummyAccounts
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
  }, [])

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }

  return (
    <>
      <PayProcessFlow />
      <div className={styles.inner}>
        {isOpen && (
          <div className={styles.bankSelect}>
            <div className={styles.banks}>
              <div className={styles.title}>결제할 계좌를 선택해주세요!</div>
              <div className={styles.bankContainer}>
                {accounts.map((account, index) => (
                  <Bank
                    key={index}
                    bankName={account.bankName}
                    accountNumber={account.accountNumber}
                    balance={account.balance}
                    handleOnClick={() => handleOnClick(index)}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
            {isClicked && (
              <button
                className={styles.btn}
                onClick={() => {
                  navigate('/payment/:username/orderComplete')
                }}
              >
                선택 계좌로 결제하기
              </button>
            )}
          </div>
        )}
        <div className={styles.payments}>
          <div className={styles.payment}>
            <div className={styles.paymentContainer}>결제 금액</div>
            <div className={styles.paymentInfo}>
              <div>
                <div className={styles.title}>
                  <span>주문 금액</span>
                </div>
                <div className={styles.title}>
                  <span>배송비</span>
                </div>
                <div className={styles.title}>
                  <span>할인</span>
                </div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}>
                  <span>19,990</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>0원</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>19,990</span>
              </div>
            </div>
          </div>
          <div className={styles.payMethod}>
            <div className={styles.title}>
              <span>결제 수단</span>
            </div>
            <div className={styles.payMethodContainer}>
              <button className={styles.btn} onClick={handleOpen}>
                계좌조회
              </button>
              <button className={styles.btn}>간편결제</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
