import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import About from './pages/about/about';
import Grid_bars from './component/grid_bar';
import backimg from './img/back2.jpg'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Grid_bars back_img={backimg}/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
