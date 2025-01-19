import React,{useEffect, useState} from 'react'
import Navbar from '@/components/Header/Navbar'
import { Outlet, useLocation } from "react-router-dom";
import Footer from '@/components/Footer/Footer'
import IconBar from '../components/IconBar/IconBar'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { scrollUp } from '../components/ScrollToTop/ScrollToTop';
import PopUp from '../components/Contacts/PopUp';
import WAicon from '../components/WAicon/WAicon';
const Layout = () => {
  const { pathname } = useLocation();
  const [popUp,setPopUp]=useState(false);
  const [once,setOnce]=useState(true);

  useEffect(scrollUp, [pathname]);
  useEffect(()=>{
    if(once){
      const timer = setTimeout(() => {
        setPopUp(true);
      }, 3000);
      setOnce(false);
      return () => clearTimeout(timer);
    }
  },[]);

  const handleClosePopUp = () => {
    setPopUp(false);
  };

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
      {popUp && (
        <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-50">
          <div className="rounded-lg p-6 max-sm:p-2 shadow-lg min-h-screen flex justify-center items-center">
            <PopUp close={handleClosePopUp}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout