import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from "@/layout/Layout"
const App = () => {
  return (
    <div classname="font-primary">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about"></Route>
            <Route path="/services"></Route>
            <Route path="/contact"></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App