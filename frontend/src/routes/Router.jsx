import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Calculator from "@/pages/Calculator";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/NotFound";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default Router