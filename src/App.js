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
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';

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
          <Route path='/part/:id' element={
            <RequiredAuth>
              <Parts />
            </RequiredAuth>
          }></Route>
          <Route path='/dashboard' element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>}>

            <Route path='/dashboard/my-profile' element={<MyProfile />}></Route>
            <Route path='/dashboard/add-review' element={<AddReview />}></Route>
            <Route path='/dashboard/my-orders' element={<MyOrders />}></Route>
            <Route path='/dashboard/manage-orders' element={<ManageAllOrders />}></Route>
            <Route path='/dashboard/add-product' element={<AddAProduct />}></Route>
            <Route path='/dashboard/make-admin' element={<MakeAdmin />}></Route>
            <Route path='/dashboard/manage-products' element={<ManageProducts />}></Route>
          </Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
