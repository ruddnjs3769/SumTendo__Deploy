import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '@/components/UserHeader'
import Footer from '@/components/Footer'

export default function MyPageLayout() {
  return (
    <div>
      <UserHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
