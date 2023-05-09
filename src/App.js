import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
    </BrowserRouter>
  );
}

export default App;
