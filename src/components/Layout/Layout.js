import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: "0 20px" }}>
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}

export default Layout