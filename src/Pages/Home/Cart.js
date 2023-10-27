import React, { useContext, useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import DropIn from "braintree-web-drop-in-react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
    const { mernAuth, setMernAuth } = useContext(AuthContext)
    const [cart, setCart] = useCart()
    const [clientToken, setClientToken] = useState('')
    const [instance, setInstance] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const totalPrice = () => {
        try {
            let total = 0
            cart?.map(item => {
                total = total + item.price
            })
            return total.toLocaleString("en-US", {
                style: 'currency',
                currency: "USD"
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removeCartItem = (itemId) => {
        try {
            let myCart = [...cart]
            let index = myCart.findIndex(i => i._id === itemId)
            myCart.splice(index, 1)
            setCart(myCart)
            localStorage.setItem('cart', JSON.stringify(myCart))
        } catch (error) {
            console.log(error);
        }
    }

    // Get payment gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get('https://manufacturer-app-server-raiyan109.vercel.app/api/parts/braintree/token')
            setClientToken(data?.clientToken)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getToken()
    }, [mernAuth?.token])

    // handle payments
    const handlePayment = async () => {
        try {
            setLoading(true)
            const { nonce } = await instance.requestPaymentMethod()
            const { data } = await axios.post('https://manufacturer-app-server-raiyan109.vercel.app/api/parts/braintree/payment', {
                nonce, cart
            })
            setLoading(false)
            localStorage.removeItem('cart')
            setCart([])
            navigate('/dashboard/manage-orders')
            toast('Payment done')
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    console.log(mernAuth.user._id);
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                        </header>

                        {cart?.length >= 1 ? (
                            <div className="mt-8">
                                <ul className="space-y-4">

                                    {cart?.map((item) => (
                                        <li className="flex items-center gap-4">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="h-16 w-16 rounded object-cover"
                                            />

                                            <div>
                                                <h3 className="text-sm text-gray-900">{item.name}</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Price:</dt>
                                                        <dd className="inline">{item.price}</dd>
                                                    </div>

                                                    {/* <div>
                                                        <dt className="inline">Color:</dt>
                                                        <dd className="inline">White</dd>
                                                    </div> */}
                                                </dl>
                                            </div>

                                            <div className="flex flex-1 items-center justify-end gap-2">
                                                <form>
                                                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value="1"
                                                        id="Line1Qty"
                                                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                    />
                                                </form>

                                                <button
                                                    onClick={() => removeCartItem(item._id)}
                                                    className="text-gray-600 transition hover:text-red-600">
                                                    <span className="sr-only">Remove item</span>

                                                    <AiOutlineDelete />
                                                </button>
                                            </div>
                                        </li>
                                    ))}

                                </ul>

                                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                    <div className="w-screen max-w-lg space-y-4">
                                        <dl className="space-y-0.5 text-sm text-gray-700">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd>{totalPrice()}</dd>
                                            </div>

                                            {/* <div className="flex justify-between">
                                                <dt>VAT</dt>
                                                <dd>£25</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>Discount</dt>
                                                <dd>-£20</dd>
                                            </div>

                                            <div className="flex justify-between !text-base font-medium">
                                                <dt>Total</dt>
                                                <dd>£200</dd>
                                            </div> */}
                                        </dl>

                                        {/* <div className="flex justify-end">
                                            <span
                                                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="-ms-1 me-1.5 h-4 w-4"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                                    />
                                                </svg>

                                                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                            </span>
                                        </div> */}

                                        <div className="flex justify-end">
                                            {
                                                !clientToken || !cart?.length ?
                                                    ("") :
                                                    (
                                                        <>
                                                            <div>
                                                                <DropIn
                                                                    options={{
                                                                        authorization: clientToken,
                                                                        paypal: {
                                                                            flow: 'vault'
                                                                        }
                                                                    }}
                                                                    onInstance={instance => setInstance(instance)}
                                                                />
                                                                <button className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
                                                                    onClick={handlePayment}
                                                                    disabled={loading || !instance}
                                                                >
                                                                    {loading ? 'Processing...' : 'Make Payment'}
                                                                </button>
                                                            </div>
                                                        </>
                                                    )
                                            }
                                        </div>
                                        {/* <div className="flex justify-end">
                                            <a
                                                href="#"
                                                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                            >
                                                Checkout
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ) :
                            (
                                <h1>Your Cart is Empty</h1>
                            )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;