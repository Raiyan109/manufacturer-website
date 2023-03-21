import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

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