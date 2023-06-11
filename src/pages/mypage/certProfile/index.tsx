import React, { useState } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/maypage/Nav'

export default function CertProfile() {

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.container__section}>
          <h1>개인정보 편집 전 본인확인</h1>
          <hr />
          <p>비밀번호 인증</p>
          <div>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요</div>
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <span>비밀번호가 올바르지 않습니다.</span>
          <button>확인</button>
        </section>
      </div>
    </>
  )
}
