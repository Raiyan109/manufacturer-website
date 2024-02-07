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
import ReactImageMagnify from 'react-image-magnify';

const Purchase = ({ refetch }) => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState([])
    const [quantityValue, setQuantityValue] = useState(1)
    const [user, loading, error] = useAuthState(auth);
    const { mernAuth } = useContext(AuthContext)
    const [cart, setCart] = useCart()
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        fetch(`https://leviathan-server.vercel.app/api/parts/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    console.log(purchase);
    const createCart = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('https://leviathan-server.vercel.app/api/parts/cart', {
                cart, mernAuth
            })

        } catch (error) {
            console.log(error);
        }
    }


    const onSubmit = async (event, data) => {
        const res = await fetcher.post(`api/parts/${id}`, data)
        setPurchase(user)

    }

    const purchaseImage = `http://localhost:5000/${purchase.photo}`

    return (
        <div className='scrollbar-hide'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: purchase.name,
                                // isFluidWidth: true,
                                src: purchaseImage,
                                width: 500,
                                height: 300
                            },
                            largeImage: {
                                src: purchaseImage,
                                width: 1200,
                                height: 1500
                            }
                        }} />
                        {/* <img alt={purchase.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={purchase.img} /> */}
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col">

                            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{purchase.name}</h1>
                            <h2 className="title-font font-medium text-2xl text-gray-900 mt-3">${purchase.price}</h2>

                            <p className="leading-relaxed my-5">{purchase.desc}</p>

                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Min. Order Quantity: </span>
                                <span className="ml-auto text-gray-900">{purchase.order}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Available Quantity</span>
                                <span className="ml-auto text-gray-900">{purchase.available}</span>
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

                            >
                                <button
                                    onClick={() => {
                                        setCart([...cart, purchase])
                                        localStorage.setItem('cart', JSON.stringify([...cart, purchase]))
                                        toast("Item added to cart");
                                    }}
                                    className="ml-auto text-primary bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded uppercase">Add to cart ${purchase.price}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <ToastContainer autoClose={1200} />
        </div>


    );
};

export default Purchase;