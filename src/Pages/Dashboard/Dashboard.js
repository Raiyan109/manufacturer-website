import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const Dashboard = () => {
    const { userFromServer } = useContext(AuthContext)

    const id = localStorage.getItem("userId")
    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />

                <section className="bg-gray-100">
                    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:py-12 lg:col-span-2">
                                <div className="mt-8">
                                    <h2 className="text-4xl font-bold text-pink-600 text-center"> User's Profile </h2>

                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                                <div
                                    className="space-y-4">
                                    <div className='flex justify-center items-center'>
                                        <BsFillPersonFill />
                                        <div className="w-full p-3 text-sm border-gray-200 rounded-lg">
                                            {userFromServer?.name}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className='flex justify-center items-center'>
                                            <AiFillMail />
                                            <div className="w-full p-3 text-sm border-gray-200 rounded-lg">
                                                {userFromServer?.email}
                                            </div>
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <BsFillTelephoneFill />
                                            <div className="w-full p-3 text-sm border-gray-200 rounded-lg">
                                                {userFromServer?.phone}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className='flex justify-center items-center'>
                                            <FaGraduationCap />
                                            <div className="w-full p-3 text-sm border-gray-200 rounded-lg">
                                                {userFromServer?.education}
                                            </div>
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <HiLocationMarker />
                                            <div className="w-full p-3 text-sm border-gray-200 rounded-lg">
                                                {userFromServer?.location}
                                            </div>
                                        </div>
                                    </div>
                                    <Link className='mt-5' to='/dashboard/my-profile'>
                                        <div className="form-control">
                                            <button type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update Profile</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/add-review'>Add a review</NavLink></li>
                    <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/manage-orders'>Manage all orders</NavLink></li>
                    <li><NavLink to='/dashboard/add-product'>Add Product</NavLink></li>
                    <li><NavLink to='/dashboard/make-admin'>Make Admin</NavLink></li>
                    <li><NavLink to='/dashboard/manage-products'>Manage products</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;