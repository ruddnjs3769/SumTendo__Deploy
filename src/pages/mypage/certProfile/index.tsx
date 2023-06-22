import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { useNavigate } from 'react-router-dom'
import { getAuthenticatedUser } from '@/apis/payment/access'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'

export default function CertProfile() {
  // 이메일 주소가 일치하는지 여부를 추적하는 상태값
  const [isLogined, setIsLogined] = useState(false)
  const [confirmMsg, setConfirmMsg] = useState('')
  // const [confirmEmail, setConfirmEmail] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useRecoilState(userState)

  //---------------------------- 로그인 상태와 토큰 유무 확인 ------------------------------//

  // 유저 정보 받아오기
  const accessToken = localStorage.getItem('token') || ''
  // 1.여기서 accessToken으로 api 호출해서 user정보 확인을 해야할지?

  const fetchUserInfo = async () => {
    if (!isLogined) return
    // api 호출함수 authenticate(accessToken) 호출
    if (isLogined) {
      try {
        const userData = await getAuthenticatedUser(accessToken)
        return setUserInfo(userData)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // fetchUserInfo는 isLogined 감시해서 true면 호출
  useEffect(() => {
    if (isLogined) {
      fetchUserInfo()
    }
  }, [isLogined])

  useEffect(() => {
    if (accessToken) {
      setIsLogined(true)
    } else {
      setIsLogined(false)
    }
  }, [accessToken])

  //----------------- 입력값에 따른 이메일 주소 일치 여부 / 유효성 확인 메세지------------//

  //이메일 주소 정규식
  const emailRegex = /^\S+@\S+\.\S+$/

  // 현재 입력값에 따른 이메일 주소 일치 여부 / 유효성 확인 메세지
  const confirmEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value
    setEmail(inputEmail)

    if (!emailRegex.test(email)) {
      setConfirmMsg('이메일 주소가 올바르지 않습니다.')
      return false
    } else if (email !== userInfo.email) {
      setConfirmMsg('이메일 주소가 일치하지 않습니다.')
    } else if (email === userInfo.email) {
      setConfirmMsg('이메일 주소 확인')
      // 모든 유효성 검사 통과
      return handleSubmit(event)
    } else {
      setConfirmMsg('이메일 주소를 다시 확인해 주세요.')
      return false
    }
  }

  // 본인인증 확인 폼제출
  const handleSubmit = async (event: React.FormEvent) => {
    console.log('폼 제출 성공:', email)
    event.preventDefault()
    console.log('이메일 주소 확인:', email)
    navigate('/user/:username/certProfile/editProfile')
  }

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h1 className={styles.title}>개인 정보 수정</h1>
              <hr className={styles.line} />
              <label className={styles.label} htmlFor="email">
                이메일 주소 재확인
              </label>
              <div className={styles.text}>본인 확인을 위해 이메일 주소를 입력해 주세요.</div>
            </div>
            {isLogined && (
              <form className={styles.inputForm} onSubmit={(event) => handleSubmit(event)}>
                <input
                  id="email"
                  className={`${styles.inputTag} ${styles.email}`}
                  type="email"
                  name="email"
                  value={email}
                  onChange={confirmEmail}
                  placeholder="회원가입 시 사용한 이메일 주소를 입력하세요"
                  autoComplete="off"
                  required
                />
                {confirmMsg && (
                  <div className={confirmMsg === '이메일 주소 확인' ? styles.msg : styles.error}>{confirmMsg}</div>
                )}
                <button className={`${styles.btnTag} ${styles.checkBtn}`} value="Sign up">
                  확인
                </button>
              </form>
            )}
            {!isLogined && (
              <form className={styles.inputForm} onSubmit={(event) => handleSubmit(event)}>
                <input
                  id="email"
                  className={`${styles.inputTag} ${styles.email}`}
                  type="email"
                  name="email"
                  placeholder="로그인 후 진행해 주세요."
                  disabled
                />
                <button className={`${styles.btnTag} ${styles.checkBtn}`}>확인</button>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
