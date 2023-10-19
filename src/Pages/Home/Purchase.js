import { async } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import fetcher from '../../api';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import PayButton from '../PayButton';
import { AuthContext } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import axios from 'axios';

const Purchase = ({ refetch }) => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState([])
    const [quantityValue, setQuantityValue] = useState(1)
    const [user, loading, error] = useAuthState(auth);
    const { mernAuth } = useContext(AuthContext)
    const [cart, setCart] = useCart()
    const { register, handleSubmit, reset } = useForm();
    // const userOrders = {
    //     userName: user.displayName,
    //     email: user.email
    // }

    useEffect(() => {
        fetch(`https://manufacturer-app-server.vercel.app/api/parts/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    const createCart = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('https://manufacturer-app-server-raiyan109.vercel.app/api/parts/cart', {
                cart, mernAuth
            })

        } catch (error) {
            console.log(error);
        }
    }
    // const [increaseQuantity, setIncreaseQuantity] = useState('')

    const onSubmit = async (event, data) => {
        const res = await fetcher.post(`api/parts/${id}`, data)
        // console.log(res);
        setPurchase(user)
        // const minimumOrderQuantity = 100
        // let updatedQuantity = parseInt(event.target.value)
        // const availableQuantity = minimumOrderQuantity + updatedQuantity
        // reset()
    }


    // fetch('https://stormy-sea-79672.herokuapp.com/userOrders', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(userOrders)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.success) {
    //             toast(`Dear ${user.name}, Your Order has been placed successfully`)
    //         }
    //         else {
    //             toast.error('You already have this order')
    //         }
    //         refetch()

    //     })

    // useEffect(() => {

    // }, [])

    // const url = `http://localhost:5000/part/${id}`
    // const { data, isloading } = useQuery(['part', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // }).then(res => res.json()))

    // if (isloading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='scrollbar-hide'>
            {/* <p className='text-xl mt-2'>User's Name: {user?.displayName}</p>
                <p className='text-xl mt-2'>User's Email: {user?.email}</p> */}

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={purchase.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={purchase.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col">

                            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{purchase.name}</h1>
                            <h2 className="title-font font-medium text-2xl text-gray-900 mt-3">${purchase.price}</h2>

                            <p className="leading-relaxed my-5">{purchase.desc}</p>

                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Min. Order Quantity: </span>
                                <span className="ml-auto text-gray-900">{purchase.minimumOrderQuantity}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Available Quantity</span>
                                <span className="ml-auto text-gray-900">{purchase.availableQuantity}</span>
                            </div>

                            {/* Quantity */}
                            <div className='flex  mt-10'>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className='text-xl mr-4' htmlFor="quantity">Quantity : </label>
                                    <input placeholder='Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" value={quantityValue}
                                        // {
                                        //     value ===> minimumOrderQuantity ? error.message
                                        // }
                                        {...register("quantity")} />
                                </form>
                            </div>
                            <div className='my-6'
                                onClick={() => {
                                    setCart([...cart, purchase])
                                    localStorage.setItem('cart', JSON.stringify([...cart, purchase]))
                                    toast("Item added to cart");
                                }}
                            >
                                <button className="ml-auto text-primary bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded uppercase">Add to cart ${purchase.price}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="bg-gray-100">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:py-12 lg:col-span-2">
                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600"> Proceed to checkout by giving your detailed information </a>
                            </div>
                        </div>

                        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <PayButton
                                        purchase={purchase}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

            <ToastContainer autoClose={1200} />
        </div>


    );
};

export default Purchase;