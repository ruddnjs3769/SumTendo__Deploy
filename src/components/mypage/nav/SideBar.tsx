import React from 'react'
import styles from './SideBar.module.scss'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.nav__container}>
        <Link  to="/user/:username">마이 페이지</Link>
      </div>
    </nav>
  )
}
