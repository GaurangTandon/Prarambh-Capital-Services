import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from "@/layout/Layout"
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Calculator from '@/pages/Calculator'
import Contacts from '@/pages/Contacts'
const App = () => {
  return (
    <div className="font-primary">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/calculator" element={<Calculator/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App