import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';
import { RxAvatar } from "react-icons/rx";
import axios from 'axios';
import { useCart } from '../../context/CartContext';



const Navbar = ({ children }) => {
    const navigate = useNavigate()
    // const id = localStorage.getItem("userId")
    const { mernAuth, setMernAuth } = useContext(AuthContext)
    const [cart, setCart, cartTotal] = useCart()

    const { pathname } = useLocation()

    const logout = () => {
        // signOut(auth);
        setMernAuth({
            ...mernAuth,
            user: null,
            token: ''
        })
        localStorage.removeItem('userId')
        localStorage.removeItem('auth')
        navigate('/login')
    };

    // const getSingleUser = async () => {
    //     const res = await axios.get(`http://localhost:5000/api/users/${id}`)
    //         .catch((err) => console.log(err))

    //     const data = await res.data.user
    //     return data
    // }

    // useEffect(() => {
    //     getSingleUser()
    //         .then((data) => setUserFromServer(data))
    // }, [])

    return (
        <div className="drawer drawer-end font-Montserrat pt-3">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-base-100 px-20">

                    {/* Drawer button is here */}

                    {pathname.includes('dashboard') && (<label tabIndex="0" htmlFor="my-drawer-2" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>)}

                    <Link to='/' className="flex-1 px-2 mx-2 text-2xl">Leviathan</Link>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
                            <li><NavLink className='rounded-lg' to='/allProduct'>Products</NavLink></li>

                            {/* {user && (
                                <li><NavLink className='rounded-lg' to='/dashboard'>Dashboard</NavLink></li>
                            )} */}




                            {/* {user ? '' : <li>{user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Sign out</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans' to='/login'>Login</NavLink>}</li>} */}

                            <li>{mernAuth.user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Sign out</button> : <button className='inline-flex text-primary btn btn-secondary border-0 py-2 mt-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans'>
                                <NavLink to='/login'>Login</NavLink>
                            </button>}</li>

                            {/* <div className="flex justify-center">
                                <Link to='/getQuote'>
                                    <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans">Get A Quote</button>
                                </Link>

                            </div> */}
                            {mernAuth.user && (
                                <details className="dropdown ">
                                    <summary className="btn">{mernAuth?.user?.name}</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 space-y-4">
                                        {mernAuth.user && (
                                            <li><NavLink className='rounded-lg' to='/dashboard'>Dashboard</NavLink></li>
                                        )}
                                        <li> <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Sign out</button></li>
                                    </ul>
                                </details>
                                // <div className="dropdown dropdown-bottom dropdown-end">
                                //     <div className="avatar cursor-pointer">
                                //         {/* <div className=" rounded-xl" tabIndex={0}>
                                //             <RxAvatar className='w-12 h-12' />
                                //         </div> */}
                                //         <div className="flex justify-center items-center pt-2" tabIndex={0}>
                                //             <h1 className='text-xl'>{mernAuth?.user?.name}</h1>
                                //         </div>
                                //     </div>
                                //     <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                //         <li><NavLink className='w-[190px] mb-1' to='/dashboard/my-profile'>My Profile</NavLink></li>
                                //         <li><NavLink className='w-[190px] mb-1' to='/dashboard/add-review'>Add a review</NavLink></li>
                                //         <li><NavLink className='w-[190px] mb-1' to='/dashboard/my-orders'>My Orders</NavLink></li>
                                //         <li>{mernAuth.user ? <button className="w-[190px] inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans mb-1" onClick={logout}>Sign out</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans mb-1' to='/login'>Login</NavLink>}</li>
                                //     </ul>
                                // </div>
                            )}

                            {/* Cart Dropdown */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">
                                            {cart?.length}
                                        </span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">{cart?.length} Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <Link to='/cart' className="btn btn-primary btn-block">View cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                {children}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink className='rounded-lg mb-1' to='/'>Home</NavLink></li>
                    <li><Link to='/allProduct' className='rounded-lg mb-1' >Products</Link></li>

                    {/* {user && (
                        <li><NavLink className='rounded-lg mb-1' to='/dashboard'>Dashboard</NavLink></li>
                    )} */}
                    {mernAuth.user && (
                        <li><NavLink className='rounded-lg' to='/dashboard'>Dashboard</NavLink></li>
                    )}

                    {/* <li>{user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Signout</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans' to='/login'>Login</NavLink>}</li> */}

                    <li>{mernAuth.user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans" onClick={logout}>Signout</button> : <button className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg font-OpenSans'>
                        <NavLink to='/login'>Login</NavLink>
                    </button>}</li>

                    <li>
                        {/* Cart Dropdown */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">
                                        {cart?.length}
                                    </span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{cart?.length} Items</span>
                                    <span className="text-info">Subtotal: ${cartTotal}</span>
                                    <div className="card-actions">
                                        <Link to='/cart' className="btn btn-primary btn-block">View cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;