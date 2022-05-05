import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>Breaking Today</h1>
      <NewsComponent />
    </div>
  );
}

export default App;
