import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/maypage/Nav'

export default function EditProfile() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.container__section}>
          <div className={styles.section__inner}>
            <div className={styles.inner__context}>
              <h1 className={styles.inner__title}>프로필</h1>
              <hr className={styles.inner__line} />
              <ol className={styles.inner__profile_list}>
                <li className={`${styles.inner__list} ${styles.inner__nickname}`}>
                  <label className={styles.inner__label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inner__content}>
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
                <li className={`${styles.inner__list} ${styles.inner__email}`}>
                  <label className={styles.inner__label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inner__content}>
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
                <li className={`${styles.inner__list} ${styles.inner__password}`}>
                  <label className={styles.inner__label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inner__content}>
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
                <li className={`${styles.inner__list} ${styles.inner__img}`}>
                  <label className={styles.inner__label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inner__content}>
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
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
