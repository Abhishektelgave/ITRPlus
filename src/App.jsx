import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ITRPlusOverview from './components/ITRPlusOverview';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <ITRPlusOverview />
            <Features />
            <AboutUs />
          </main>
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;
