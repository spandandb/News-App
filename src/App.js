import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className='App'>
      <LoadingBar color='#f11946' progress={progress} />
      <Navbar />
      <NewsComponent setProgress={setProgress} />
    </div>
  );
}

export default App;
