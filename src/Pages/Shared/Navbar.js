import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';
import { RxAvatar } from "react-icons/rx";


const Navbar = ({ children }) => {

    const { user } = useContext(AuthContext)

    // const [user] = useAuthState(auth);
    const [admin] = UseAdmin()
    const { pathname } = useLocation()

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };


    return (
        <div className="drawer drawer-end font-Montserrat">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-base-100 px-20">

                    {/* Drawer button is here */}

                    {pathname.includes('dashboard') && (<label tabindex="0" for="my-drawer-2" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>)}

                    <div className="flex-1 px-2 mx-2 text-2xl">Leviathan</div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
                            <li><NavLink className='rounded-lg' to='/allProduct'>Products</NavLink></li>
                            {/* <li><NavLink className='rounded-lg' to='/myPortfolio'>My Portfolio</NavLink></li> */}
                            {user && (
                                <li><NavLink className='rounded-lg' to='/dashboard'>Dashboard</NavLink></li>
                            )}
                            <li><NavLink className='rounded-lg' to='/blogs'>Blogs</NavLink></li>
                            {/* <li><NavLink className='rounded-lg' to='/part'>Purchase</NavLink></li> */}
                            {user ? '' : <li>{user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans" onClick={logout}>Sign out</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans' to='/login'>Login</NavLink>}</li>}
                            {/* <div className="flex justify-center">
                                <Link to='/getQuote'>
                                    <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans">Get A Quote</button>
                                </Link>

                            </div> */}
                            {user && (<div className="dropdown dropdown-bottom dropdown-end">
                                <div className="avatar cursor-pointer">
                                    <div className=" rounded-xl" tabIndex={0}>
                                        <RxAvatar className='w-12 h-12' />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><NavLink className='w-[190px] mb-1' to='/dashboard/my-profile'>My Profile</NavLink></li>
                                    <li><NavLink className='w-[190px] mb-1' to='/dashboard/add-review'>Add a review</NavLink></li>
                                    <li><NavLink className='w-[190px] mb-1' to='/dashboard/my-orders'>My Orders</NavLink></li>
                                    <li>{user ? <button className="w-[190px] inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans mb-1" onClick={logout}>Sign out</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans mb-1' to='/login'>Login</NavLink>}</li>
                                </ul>
                            </div>)}
                        </ul>
                    </div>
                </div>

                {children}

            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink className='rounded-lg mb-1' to='/'>Home</NavLink></li>
                    <li><NavLink className='rounded-lg mb-1' to='/allProduct'>Products</NavLink></li>
                    {user && (
                        <li><NavLink className='rounded-lg mb-1' to='/dashboard'>Dashboard</NavLink></li>
                    )}
                    <li><NavLink className='rounded-lg mb-1' to='/blogs'>Blogs</NavLink></li>
                    {/* <li><NavLink className='rounded-lg' to='/part'>Purchase</NavLink></li> */}
                    <li>{user ? <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg font-OpenSans" onClick={logout}>Signout</button> : <NavLink className='inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200  rounded text-lg font-OpenSans' to='/login'>Login</NavLink>}</li>

                    {/* <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Book now
                        </div>
                        <div className="collapse-content">
                            <li><NavLink className='rounded-lg' to='/contact'>Quick book</NavLink></li>
                            <li><NavLink className='rounded-lg' to='/services'>Pre book</NavLink></li>
                        </div>
                    </div> */}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;