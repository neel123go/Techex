import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import ContactUs from './Pages/ContactUs';
import Team from './Pages/Team';
import TeamDetails from './Pages/TeamDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team-details' element={<TeamDetails />} />
        <Route path='/services-details' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
