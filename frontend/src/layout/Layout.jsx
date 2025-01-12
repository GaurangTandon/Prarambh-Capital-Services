import React from 'react'
import Navbar from '@/components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer/Footer'
import IconBar from '../components/IconBar/IconBar'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <IconBar/>
      <div className='mt-14 sm:mt-16'>
        <Outlet />
      </div>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default Layout