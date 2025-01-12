import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from "@/layout/Layout"
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Calculator from '@/pages/Calculator'
import Contacts from '@/pages/Contacts'
import NotFound from '@/pages/NotFound'
const App = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url('/bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div 
      className="font-primary"
      style={backgroundStyle}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/calculator" element={<Calculator/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="*" element={<Home/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App