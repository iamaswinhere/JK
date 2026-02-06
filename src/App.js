import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import FloatingContact from './components/FloatingContact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        </Routes>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
