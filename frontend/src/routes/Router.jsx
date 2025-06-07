import { Route, Routes, Navigate } from "react-router-dom";

import About from "@/pages/About";
import Calculator from "@/pages/Calculator";
import Contacts from "@/pages/Contacts";
import Disclaimer from "@/pages/Disclaimer";
import Home from "@/pages/Home";
import Layout from "@/layout/Layout";
// import NotFound from "@/pages/NotFound";
import Services from "@/pages/Services";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Disclosure from "../pages/Discloser";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/discloser" element={<Disclosure/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Router;
