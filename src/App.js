import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Home />}></Route>
          <Route path='/blogs' element={<Home />}></Route>
          <Route path='/login' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
