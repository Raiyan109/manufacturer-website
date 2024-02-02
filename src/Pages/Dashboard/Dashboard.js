import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import DashHome from './DashHome';


const Dashboard = () => {
    const { mernAuth, setMernAuth } = useContext(AuthContext)
    const id = localStorage.getItem("userId")
    const location = useLocation()


    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}

                <Outlet />
                {location.pathname === '/dashboard' && <DashHome />}


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/add-review'>Add a review</NavLink></li>
                    <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                    {mernAuth?.user?.role === 1 && (
                        <>
                            <li><NavLink to='/dashboard/manage-orders'>Manage all orders</NavLink></li>
                            <li><NavLink to='/dashboard/add-product'>Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/make-admin'>Make Admin</NavLink></li>
                            <li><NavLink to='/dashboard/manage-products'>Manage products</NavLink></li>
                        </>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;