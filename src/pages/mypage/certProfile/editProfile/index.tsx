import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'

export default function EditProfile() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.innerTop}>
              <h1 className={styles.title}>프로필 수정</h1>
              <hr className={styles.line} />
            </div>
            <div className={styles.innerBottom}>
              <ol className={styles.lists}>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="displayName"
                      className={`${styles.inputTag} ${styles.displayName}`}
                      type="text"
                      name="displayName"
                      placeholder="displayName"
                      required
                    />
                  </form>
                </li>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="email">
                    이메일
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="email"
                      className={`${styles.inputTag} ${styles.email}`}
                      type="email"
                      name="email"
                      placeholder="{고객 이메일 데이터}"
                      disabled
                      required
                    />
                  </form>
                </li>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="password">
                    비밀 번호
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="password"
                      className={`${styles.inputTag} ${styles.password}`}
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                    <div className={`${styles.spanTag} ${styles.errorMsg}`}>비밀번호가 올바르지 않습니다.</div>
                  </form>
                </li>
                <li className={`${styles.list} ${styles.uploade}`}>
                  <label className={styles.label} htmlFor="uploade">
                    프로필
                    <br />
                    이미지
                  </label>
                  <div className={styles.box}>
                    <img className={styles.profile} src="" alt="" />
                    <div className={styles.profileInfo}>
                      <div className={styles.profileSubText}>
                        - 파일 사이즈 최대 1MB 이하
                        <br /> - 사용자 프로필 이미지(Base64) : jpg/ jpeg/ webp/ png/ gif/ svg
                        <div className={styles.errorMsg}>파일 업로드 양식을 확인해 주세요.</div>
                      </div>
                      <form className={styles.uploadeForm}>
                        <input
                          className={`${styles.inputTag} ${styles.uploadForm}`}
                          id="uploade"
                          type="file"
                          name="file"
                          accept="image/jpeg, image/png, image/gif, image/svg+xml"
                          required
                        />
                      </form>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
