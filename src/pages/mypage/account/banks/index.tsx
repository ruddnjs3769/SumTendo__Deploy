import React, { useEffect, useState  } from 'react'
import styles from './index.modules.scss'
import ConnectedBank from '@/components/payment/payMethod/ConnectedBank'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'
import Modal from '@/components/common/Modal'
import dummyAccountsList from '@/pages/payment/dummyAccountsList.json'
import { Banks } from '@/types/account'
import PossibleBank from '@/components/payment/payMethod/PossibleBank'
import BankConnect from '@/components/payment/payMethod/BankConnect'
import Sidebar from '@/components/mypage/nav/SideBar'


export default function BankName() {
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
        <div className={styles.paymentContainer}>계좌 연결</div>
        <div>추가할 계좌의 은행을 선택하세요.</div>
        <div className={styles.totallAccount}>
          <div className={styles.totale}>총 계좌 잔액</div>
          <div className={styles.totaleAmount}>1,000,000 원</div>
          <div className={styles.underLine}>₩</div>
        </div>
        <div className={styles.payMethod}>
          <div className={styles.title}>
            <span>결제 수단</span>
          </div>
          <div className={styles.payMethodContainer}>
            <button className={styles.btn} onClick={handleAccountsOpen}>
              계좌조회
            </button>
            <button className={styles.btn} onClick={handleModalOpen}>
              간편결제
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
      {!nextModal && (
        <div className={styles.accountListContainer}>
          <div className={styles.title}>계좌 등록</div>
          <div className={styles.accountLists}>
            {accountsList
              .filter((account) => !account.disabled)
              .map((account, index) => (
                <PossibleBank
                  key={index}
                  bankName={account.name}
                  onClick={() => {
                    handleNextModal(index)
                  }}
                />
                //1. possibleBank를 click했을 때 해당 은행의 정보를 BankConnect에서 사용할 수 있어야 함.
                //2. 필요한 정보는 account.name, account.code, account.digit
                //3. account의 몇번째 index를 눌렀느냐에 따라 받아오는 정보가 달라짐.
                //3-1. filter한 accountsList배열에서 index를 찾아야 함.
                //4. onclick이벤트에 해당 배열의 index를 저장.
                //4-1. accountList 배열에서 index값을 가져오기?
              ))}
          </div>
          <div className={styles.subs}> 등록할 계좌를 선택해주세요!</div>
        </div>
      )}
      {nextModal && (
        <div className={styles.BankConnectContainer}>
          <BankConnect
            bankName={selectedAccount.name}
            bankCode={selectedAccount.code}
            bankDigits={selectedAccount.digits}
          />
          <button
            className={styles.btn}
            onClick={() => {
              navigate('/payment/:username/orderComplete')
            }}
          >
            계좌 등록 후 결제하기
          </button>
        </div>
      )}
    </Modal>
  </>
)
}
