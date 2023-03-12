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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
