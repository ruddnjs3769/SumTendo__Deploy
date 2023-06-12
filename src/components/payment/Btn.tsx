import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Btn.module.scss'

export type BtnProps = {
  text: string
  targetURL: string
}

export default function Btn({ text, targetURL }: BtnProps) {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={() => {
            navigate(`${targetURL}`)
          }}
        >
          {text}
        </button>
      </div>
    </div>
  )
}
