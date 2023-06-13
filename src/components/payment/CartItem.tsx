import React from 'react'
import styles from './CartItem.module.scss'

export default function CartItem() {
  const dummyItem = {
    id: 'nbqtQvEivYwEXTDet7YM',
    title: '링핏트',
    price: 75000,
    description: '운동합쉬다',
    tags: ['운동', '신제품', '베스트'],
    thumbnail: `${process.env.PUBLIC_URL}/images/dummy1.jpg`,
    photo: 'https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png',
    isSoldOut: false,
    reservations: [],
    discountRate: 0
  }

  return (
    <>
      <li className={styles.cartItem}>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={dummyItem.thumbnail} alt="게임사진" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{dummyItem.title}</div>
            <div className={styles.etc}>
              <div className={styles.remove}>
                <a className={styles.removeLink} href="#">
                  <img
                    className={styles.removeIcon}
                    src={`${process.env.PUBLIC_URL}/images/deleteIcon.svg`}
                    alt="delete"
                  />
                  <span className={styles.removeText}>삭제</span>
                </a>
              </div>
              <div className={styles.grade}>
                <div>
                  <img className={styles.gradeImg} src={`${process.env.PUBLIC_URL}/images/age_all.png`} alt="" />
                </div>
                <div>
                  <img className={styles.gradeImg} src={`${process.env.PUBLIC_URL}/images/grade_fear.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.qty}>
          <input className={styles.qtyInput} type="text" value="1" />
        </div>
        <div className={styles.price}>
          <span>₩ {dummyItem.price}</span>
        </div>
      </li>
    </>
  )
}
