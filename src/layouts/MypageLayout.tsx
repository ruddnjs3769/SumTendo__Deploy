import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '@/components/common/UserHeader'
import Footer from '@/components/common/Footer'

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
