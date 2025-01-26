import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Accueil';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Mentions from './Pages/Mentions';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <Header className="row" />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mentions-legales" element={<Mentions />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
