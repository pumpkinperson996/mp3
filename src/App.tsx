import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import References from './pages/References';
import Credits from './pages/Credits';  

const App = () => (
  <Router>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/references" element={<References />} />
      <Route path="/credits" element={<Credits />} />  

      
    </Routes>
    <Footer />
  </Router>
);

export default App;
