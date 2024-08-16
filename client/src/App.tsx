import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import { hotjar } from 'react-hotjar';

function App() {
  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID && !ReactGA.isInitialized) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    }

    if (process.env.REACT_APP_HOTJAR_ID && !hotjar.initialized()) {
      hotjar.initialize(
        +process.env.REACT_APP_HOTJAR_ID,
        +(process.env.REACT_APP_HOTJAR_VERSION || 6),
      );
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
