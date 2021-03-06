import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import fetcher from '../../api';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Purchase = ({ refetch }) => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState([])
    console.log(purchase);

    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();

    const userOrders = {
        userName: user.displayName,
        email: user.email
    }

    // useEffect(() => {

    //     fetch(`https://stormy-sea-79672.herokuapp.com/part/${id}`)
    //         .then(res => res.json())
    //         .then(data => setPurchase(data))
    // }, [])

    // const [increaseQuantity, setIncreaseQuantity] = useState('')

    const onSubmit = async (event, data) => {
        const res = await fetcher.post(`part/${id}`, data)
        console.log(res);
        setPurchase(user)
        // const minimumOrderQuantity = 100
        // let updatedQuantity = parseInt(event.target.value)
        // const availableQuantity = minimumOrderQuantity + updatedQuantity
        // reset()
    }


    fetch('https://stormy-sea-79672.herokuapp.com/userOrders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userOrders)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                toast(`Dear ${user.name}, Your Order has been placed successfully`)
            }
            else {
                toast.error('You already have this order')
            }
            refetch()

        })

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
        <div>
            <div className=''>
                <img
                    alt=""
                    src={purchase.img}
                    class=" inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
                />
            </div>

            <div
                class=" w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 sm:w-2/3 group-hover:bg-black"
            >
                <strong class="text-lg uppercase">
                    {purchase.name}
                </strong>

                <p class="mt-1 text-xs font-medium uppercase">
                    {purchase.description}
                </p>
                <p class="mt-1 text-xs font-medium uppercase">
                    Price: {purchase.price}
                </p>
                <p class="mt-1 text-xs font-medium uppercase">
                    Available Quantity: {purchase.availableQuantity}
                </p>
                <p class="mt-1 text-xs font-medium uppercase">
                    Min. Order Quantity: {purchase.minimumOrderQuantity}
                </p>
                <p className='text-xl mt-2'>User's Name: {user?.displayName}</p>
                <p className='text-xl mt-2'>User's Email: {user?.email}</p>
            </div>




            <section class="bg-gray-100">
                <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:py-12 lg:col-span-2">
                            <div class="mt-8">
                                <a href="" class="text-2xl font-bold text-pink-600"> Proceed to checkout by giving your detailed information </a>
                            </div>
                        </div>

                        <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form onSubmit={handleSubmit(onSubmit)} class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button type='submit' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex justify-center mt-10 bg-secondary'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-xl mr-4' for="quantity">Quantity : </label>
                    <input placeholder='Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" value={'100'}
                        // {
                        //     value ===> minimumOrderQuantity ? error.message
                        // }
                        {...register("quantity")} />
                </form>
            </div>
        </div>


    );
};

export default Purchase;