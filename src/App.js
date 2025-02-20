import './App.css';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import About from './pages/about/about';
import Grid_bars from './component/grid_bar';
import backimg from './img/back2.jpg'
import Credit from './pages/credit/credit';
import Program from './pages/program/Program';
import Works from './pages/archive/Works';
import Archive from './pages/archive/Archive';
import BackMob from './img/moback5.jpg'
import NavSmall from './component/NavSmall';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='app'>
      <HashRouter>
        {windowWidth < 990 ? <NavSmall background={BackMob} /> : <Grid_bars back_img={backimg} />}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/2023yajo' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/archive' element={<Archive />} />
          <Route path="/person/:id" element={<Works />} />
          <Route path='/program' element={<Program />} />
          <Route path='/credit' element={<Credit />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
