import { Route, Routes } from "react-router-dom";

import About from "@/pages/About";
import Calculator from "@/pages/Calculator";
import Contacts from "@/pages/Contacts";
import Disclaimer from "@/pages/Disclaimer";
import Home from "@/pages/Home";
import Layout from "@/layout/Layout";
import NotFound from "@/pages/NotFound";
import Services from "@/pages/Services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
