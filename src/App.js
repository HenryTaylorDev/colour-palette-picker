import { Route, Routes } from 'react-router-dom';
import './App.css';
import PalettePickerPage from './pages/PalettePickerPage';
import TrendingPage from './pages/TrendingPage';

function App() {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<PalettePickerPage/>} />
        <Route path='/trending' element={<TrendingPage />} />
      </Routes>
    </div>
  );
}

export default App;
