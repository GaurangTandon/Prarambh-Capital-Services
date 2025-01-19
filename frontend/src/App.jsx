import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
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
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App