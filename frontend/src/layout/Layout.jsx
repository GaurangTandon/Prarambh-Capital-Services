import { useEffect } from 'react'
import Navbar from '@/components/Header/Navbar'
import { Outlet, useLocation } from "react-router-dom";
import Footer from '@/components/Footer/Footer'
import IconBar from '../components/IconBar/IconBar'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { scrollUp } from '../components/ScrollToTop/ScrollToTop';
import WAicon from '../components/WAicon/WAicon';
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(scrollUp, [pathname]);

  return (
    <div>
      <Navbar />
      <IconBar />
      <div className="mt-12 sm:mt-14">
        <Outlet />
      </div>
      <ScrollToTop />
      <WAicon/>
      <Footer />
    </div>
  );
}

export default Layout