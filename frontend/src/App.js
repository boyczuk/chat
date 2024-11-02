import logo from './logo.svg';
import Home from './pages/Home';
import Messages from './pages/Messages';
import TopNavbar from './components/TopNavbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>

  );
}

export default App;
