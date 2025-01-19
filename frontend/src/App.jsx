import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SummarizePage from './pages/Products/SummarizePage';
import QaBot from './pages/Products/QaBot';
import BlogWriter from './pages/Products/BlogWriter';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/summarize" element={<SummarizePage />} />
          <Route path="/qabot" element={<QaBot/>} />
          <Route path="/blogwriter" element={<BlogWriter/>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;