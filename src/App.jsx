import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <BrowserRouter>
      <nav className='flex justify-end text-orange-400 text-6xl list-none w-full'>
        <Link to='/' className='ml-4'>
          About Me
        </Link>
        <Link to='/portfolio' className='ml-8'>
          Portfolio
        </Link>
        <Link to='/contact' className=' ml-8'>
          Contact
        </Link>
        <Link to='/resume' className='ml-8 pr-8'>
          Resume
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
