import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import About from './pages/about/about';
import Grid_bars from './component/grid_bar';
import backimg from './img/back2.jpg'
import Credit from './pages/credit/credit';
import Program from './pages/program/Program';
import Works from './pages/archive/Works';
import Archive from './pages/archive/Archive';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <Grid_bars back_img={backimg} />
        <Routes>
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
