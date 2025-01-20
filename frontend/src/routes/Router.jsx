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
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/disclaimer" element={<Disclaimer />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
};

export default Router;
