import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Main() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <StrictMode>
      {!loadingDone && <PreLoader onFinish={() => setLoadingDone(true)} />}
      {loadingDone && (
        <div className="container mx-auto px-6">
          <Navbar />
          <App />
          <Footer />
        </div>
      )}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
