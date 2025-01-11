import React from 'react'
import Navbar from '@/components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-14 sm:mt-16'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout