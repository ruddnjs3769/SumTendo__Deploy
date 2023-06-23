import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ConnectedBank from '@/components/payment/payMethod/ConnectedBank'
import { AccountsBalance } from '@/types/account'
import { useNavigate } from 'react-router-dom'
import Modal from '@/components/common/Modal'
import { Bank, Banks, AccountConnectionRequest } from '@/types/account'
import PossibleBank from '@/components/payment/payMethod/PossibleBank'
import BankConnect from '@/components/payment/payMethod/BankConnect'
import { Product } from '@/types/product'
import { UserCart, UserCartItem } from '@/types/usercart'
import { getSelectableAccounts, getConnectedAccounts, postConnectAccount } from '@/apis/payment/account'
import { postBuyProduct } from '@/apis/payment/product'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recoil/common/userState'

//사용되는 api
// 1. 계좌 조회
// 3.제품거래(구매) 신청
// 4. 선택가능한 은행 목록 조회

// todo
// 1. 총 계산금액 (할인율 포함) - 주문 금액, 할인율, 최종 결제 금액 표기 ✅
// 2. 새로고침 시 모달 초기화 ✅
// 3. 모달 계좌 연결 정보 입력 (정규식) ✅
// 4. 계좌 데이터 연결(중요) -아아아아아
// 5. api 불러와서 연동

export default function PayMethod() {
  const [connectedAccounts, setConnectedAccounts] = useState<AccountsBalance>({
    totalBalance: 0,
    accounts: []
  })
  const [possibleAccounts, setPossibleAccounts] = useState<Banks>([])
  const user = useRecoilValue(userState)
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nextModal, setNextModal] = useState(false)
  const [bankIndex, setBankIndex] = useState(0)
  const navigate = useNavigate()
  const [BankConnectData, setBankConnectData] = useState<AccountConnectionRequest>({
    bankCode: '',
    accountNumber: '',
    phoneNumber: '',
    signature: true
  })

  //cartItems 할인 계산
  const userCart: UserCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const matchedUserCart = userCart.filter((item: UserCartItem) => item.email === user.email)
  const orderPrice = matchedUserCart
    .map((item: Product) => item.price)
    .reduce((acc: number, cur: number) => acc + cur, 0)
  const orderFinalPrice = matchedUserCart
    .map((item: Product) => item.price - (item.price * item.discountRate) / 100)
    .reduce((acc: number, cur: number) => acc + cur, 0)
  const discountPrice = orderPrice - orderFinalPrice

  //accessToken 가져오기
  const accessToken = localStorage.getItem('token') || ''

  useEffect(() => {
    setIsOpen(false)
    setIsClicked(false)
    setIsModalOpen(false)
    setNextModal(false)
    setBankIndex(0)
  }, [])

  // 계좌 조회 버튼 핸들러
  const handleAccountsOpen = async () => {
    setIsOpen(!isOpen)
    setIsClicked(false)
    setActiveIndex(null)
    //1. 게좌 조회 버튼을 처음 눌렀을 때만 getSelectableAAccounts fetch
    //2. 이후 클릭해서 해당 창이 열렸을 때는, connectedAccounts에 저장된 값을 불러오기.
    if (connectedAccounts.accounts.length === 0) {
      try {
        const res = await getConnectedAccounts(accessToken)
        setConnectedAccounts(res)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // 선택계좌 결제하기 버튼 생성 핸들러
  const handleBankOnClick = (index: number) => {
    setIsClicked(true)
    setActiveIndex(index)
  }

  //모달버튼열기 핸들러
  const handleModalOpen = async () => {
    setIsModalOpen(true)
    if (possibleAccounts.length === 0) {
      try {
        const res = await getSelectableAccounts(accessToken)
        setPossibleAccounts(res)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false)
    setNextModal(false)
  }
  //다음 모달 핸들러
  const handleNextModal = (index: number) => {
    setNextModal(true)
    setBankIndex(index)
  }
  //BankConnect컴포넌트서 가져올 데이터를 위한 Props함수
  const handleBankConnectData = (data: AccountConnectionRequest) => {
    setBankConnectData(data)
  }

  const handleBankConnectOrder = () => {
    const accountNumLength = selectedAccount.digits.reduce((acc, val) => acc + val, 0)
    if (BankConnectData.accountNumber.length !== accountNumLength) {
      alert('올바른 계좌번호를 입력해주세요!')
    } else if (BankConnectData.phoneNumber.length !== 10) {
      alert('올바른 전화번호를 입력해주세요!')
    } else {
      // 수행할 로직
      navigate(`/payment/${user.displayName}/orderComplete`)
    }
    // api 은행 계좌 등록 요청. function(BankConnectData)
    // 요청 완료 시 api 거래 신청 요청. accountId, productId 만 있으면 됨. function(BankConnectData.accountNumber, )
    // 근데 productId가 배열데이터가 아님. 아
    // 반복문 사용해서 productId만큼 요청보내기?
    // 예외처리 - BankConnectData가 양식에 맞지 않을 경우, 올바른 계좌번호를 or 전화번호를 입력해주세요! alert보내기 ✅
    // 아 어렵다
    // 완료 시 navigate('/payment/:username/orderComplete')
  }

  const handleSelectedBankOrder = () => {
    // api 거래 신청 요청.
    // 완료시 navigate('/payment/:username/orderComplete')
    navigate(`/payment/${user.displayName}/orderComplete`)
  }

  const selectedAccount = possibleAccounts[bankIndex]

  return (
    <>
      <PayProcessFlow />
      <div className={styles.inner}>
        {isOpen && (
          <div className={styles.bankSelect}>
            <div className={styles.banks}>
              {connectedAccounts.accounts.length !== 0 ? (
                <>
                  <div className={styles.title}>결제할 계좌를 선택해주세요!</div>
                  <div className={styles.bankContainer}>
                    {connectedAccounts?.accounts.map((account, index) => (
                      <ConnectedBank
                        key={index}
                        bankName={account.bankName}
                        accountNumber={account.accountNumber}
                        balance={account.balance}
                        handleOnClick={() => handleBankOnClick(index)}
                        isActive={index === activeIndex}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div>연결된 계좌가 없습니다!</div>
                  <div>간편 결제를 이용해주세요.</div>
                </>
              )}
            </div>
            {isClicked && (
              <button className={styles.btn} onClick={handleSelectedBankOrder}>
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
                  <span>{orderPrice}</span>
                </div>
                <div className={styles.content}>
                  <span>무료</span>
                </div>
                <div className={styles.content}>
                  <span>{discountPrice}</span>
                </div>
              </div>
            </div>
            <div className={styles.totals}>
              <div className={styles.mark}>
                <span>최종 결제 금액</span>
              </div>
              <div className={styles.price}>
                <span>{orderFinalPrice}</span>
              </div>
            </div>
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
              {possibleAccounts
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
                  //4-1. accountList 배열에서 index값을 가져오기
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
              handleBankConnectData={handleBankConnectData}
            />
            <button className={styles.btn} onClick={handleBankConnectOrder}>
              계좌 등록 후 바로 결제하기
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}
