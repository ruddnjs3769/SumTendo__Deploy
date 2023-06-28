import React, { useState, useEffect, MouseEventHandler } from 'react'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import { Link } from 'react-router-dom'
import ConnectedAccount from '@/components/mypage/bank/ConnectedAccount'
import { AccountsBalance, Bank, AccountClouserRequest, AccountColuserResponse } from '@/types/account'
import { getConnectedAccounts, deleteAccount } from '@/apis/payment/account'
import Modal from '@/components/common/Modal'
import getBankLogo from '@/utils/getBankLogo'




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

// 계좌 해지
// https://github.com/KDT1-FE/KDT5-M5#%EA%B3%84%EC%A2%8C-%ED%95%B4%EC%A7%80
// 요청 interface RequestBody
// account closure
// export interface AccountClouserRequest {
//   accountId: string // 계좌 ID (필수!)
//   signature: boolean // 사용자 서명 (필수!)
// }
// 응답 type ResponseValue = true  // 계좌 해지 처리 상태
// export type AccountColuserResponse = boolean

export default function Account() {
  const [accounts, setAccounts] = useState<Bank[]>([])
  const [totalBalance, setTotalBalance] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedAccount, setSelectedAccount] = useState<Bank>({
      id: '', // 계좌 ID
      bankName: '', // 은행 이름
      bankCode: '', // 은행 코드
      accountNumber: '', // 계좌 번호
      balance: 0 // 계좌 잔액
    })
  const bankLogo = getBankLogo(selectedAccount.bankName)

  const [accountId, setAccountId] = useState<AccountClouserRequest>({
    accountId: '',
    signature: true
  })

  //accessToken 가져오기
  const accessToken = localStorage.getItem('token') || ''

  const handleModalOpen: MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
    const accountIndex = Number(event.currentTarget.dataset.index)
    const account = accounts[accountIndex]
    console.log(account)
    setSelectedAccount(account)
    console.log(selectedAccount)
    setIsModalOpen(true)
    console.log('연결된 계좌 모달 오픈')
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  // 잔액 조회 목록 호출
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

  // 계좌 해지 함수 호출
  const handleAccountDeletion = async () => {
    try {
      if (selectedAccount.id !== '') {
        setAccountId({ accountId: selectedAccount.id, signature: true })
        await deleteAccount(accessToken, { accountId: selectedAccount.id, signature: true })
      }
      console.log('계좌가 정상적으로 해지되었습니다!')
      alert('계좌가 정상적으로 해지되었습니다!')
      setIsModalOpen(false)
    } catch (error) {
      console.error('계좌 해지 요청 중 오류가 발생했습니다:', error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.banksContainer}>
          <div className={styles.totallAccounts}>
            <div className={styles.totale}>💰 총 계좌 잔액</div>
            <div className={styles.amount}>{totalBalance.toLocaleString()}원</div>
            <div className={styles.underLine}>₩</div>
          </div>
          {/* 추가된 계좌 + 계좌 추가 버튼 영역 */}
          <div className={styles.banksAccounts}>
            <div className={styles.banks}>
              {/* accounts는 배열이라 .map사용 */}
              {accounts.map((account, index) => (
                <button key={index} className={styles.linkedBank} onClick={handleModalOpen} data-index={index}>
                  {/*인덱스 데이터를 버튼에 추가 */}
                  <ConnectedAccount
                    bankName={account.bankName}
                    accountNumber={account.accountNumber}
                    balance={account.balance}
                    // handleOnClick={someFunction} // 적절한 함수로 대체해야 합니다.
                    // isActive={someCondition} // 적절한 조건으로 대체해야 합니다.
                  />
                </button>
              ))}
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
      {isModalOpen && selectedAccount && (
        <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
          <div className={styles.modalContainer}>
            <div className={styles.inner}>
              <h1 className={styles.title}>{selectedAccount.bankName}</h1>
              <h4 className={styles.subtitle}>계좌를 해지하시겠습니까?</h4>
              <div className={styles.bankAccount}>
                <div className={styles.bankName}>은행 : {selectedAccount.bankName}</div>
                <div className={styles.bankNumber}>계좌번호 : {selectedAccount.accountNumber}</div>
                <div className={styles.bankAmount}>{selectedAccount.balance.toLocaleString()}원</div>
                <div className={styles.bankUnderLine}>₩</div>
              </div>
              <div className={styles.btnContainer}>
                <button type="button" className={`${styles.btnTag} ${styles.enrolled}`} onClick={handleAccountDeletion}>
                  예
                </button>
                <button type="reset" onClick={handleModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
                  아니오
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
