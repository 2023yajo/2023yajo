import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navibar from './component/navbar';
import Main from './pages/main/main';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
