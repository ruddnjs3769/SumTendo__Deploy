import React from 'react'
import styles from './index.module.scss'

const genres = [
  '액션',
  'RPG',
  '어드벤처',
  '파티',
  '전략',
  '음악',
  '스포츠',
  '아케이드',
  '격투',
  '레이싱',
  '시뮬레이션',
  '슈팅',
  '보드',
  '트레이닝',
  '학습',
  '실용',
  '커뮤니케이션',
  '기타'
]

export default function Genre() {
  const addGenre = () => {
    return null
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장르</h1>
      <form onClick={addGenre}>
        <ul className={styles.genreList}>
          {genres.map((genre) => {
            return (
              <li key={genre}>
                <input type="checkbox" />
                <span>{genre}</span>
              </li>
            )
          })}
        </ul>
      </form>
    </div>
  )
}
