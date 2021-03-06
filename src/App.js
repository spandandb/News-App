import './App.css';
import NewsComponent from './components/NewsComponent';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [progress, setProgress] = useState(10);

  return (
    <div className='App'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <NewsComponent setProgress={setProgress} />
      <Footer />
    </div>
  );
}

export default App;
