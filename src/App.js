import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './Pages/Auth/Login';
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
import Signup from './Pages/Auth/Signup';
import NotFound from './Pages/Shared/NotFound';
import Purchase from './Pages/Home/Purchase';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Blogs from './Pages/Home/Blogs';
import { ToastContainer } from 'react-toastify';
// import Cookies from './Pages/Cookies';
import CookieConsent from "react-cookie-consent";
import GetQuote from './Pages/GetQuote/GetQuote';
import CheckoutSuccess from './Pages/CheckoutSuccess';
import AllProducts from './Pages/Home/AllProduct/AllProducts';
import ResetPass from './Pages/Auth/ResetPass';
import Cart from './Pages/Home/Cart';
import Breadcrumb from './components/Breadcrumb';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar>
        {/* <Breadcrumb /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/resetPass' element={<ResetPass />}></Route>
          <Route path='/getQuote' element={<GetQuote />}></Route>
          <Route path='/allProduct' element={<AllProducts />}></Route>
          <Route path='/myPortfolio' element={<MyPortfolio />}></Route>
          <Route path='/part' element={<Purchase />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='checkout-success' element={<CheckoutSuccess />}></Route>

          <Route path='api/parts/:id' element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }></Route>

          <Route path='/dashboard' element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>}>

            <Route path='my-profile' element={<MyProfile />}></Route>
            <Route path='add-review' element={<AddReview />}></Route>
            <Route path='my-orders' element={<MyOrders />}></Route>
            <Route path='manage-orders' element={<ManageAllOrders />}></Route>
            <Route path='add-product' element={<AddAProduct />}></Route>
            <Route path='make-admin' element={<MakeAdmin />}></Route>
            <Route path='manage-products' element={<ManageProducts />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </Navbar>
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}

      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
}

export default App;
