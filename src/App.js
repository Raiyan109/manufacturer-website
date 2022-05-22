import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './Pages/Auth/Login';
import Parts from './Pages/Home/Parts';
import RequiredAuth from './Pages/Auth/RequiredAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminRoute from './Pages/Auth/AdminRoute';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/part' element={
            <RequiredAuth>
              <Parts />
            </RequiredAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>}>

          </Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
