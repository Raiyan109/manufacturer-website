import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState([])

    const [user, loading, error] = useAuthState(auth);

    const userInfo = {
        userName: user.displayName,
        email: user.email
    }

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

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
            <div className='absolute'>
                <img
                    alt="Modded Bike"
                    src={purchase.img}
                    class=" inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
                />
            </div>

            <div
                class="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 sm:w-2/3 group-hover:bg-black"
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

        </div>
    );
};

export default Purchase;