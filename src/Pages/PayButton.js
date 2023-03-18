import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import fetcher from '../api';

const PayButton = ({ purchase }) => {

    const [user, loading, error] = useAuthState(auth);

    const userOrders = {
        userName: user.displayName,
        email: user.email
    }

    // const [parts, setParts] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         const res = await fetcher.get('api/parts')
    //         console.log(res);
    //         setParts(res.data)
    //     })()
    // }, [])

    const handleCheckOut = () => {
        console.log(purchase);
        axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
            purchase,
            userName: user.displayName,
            email: user.email
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <div className='form-control'>
            <button type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => handleCheckOut()}>Confirm</button>
        </div>
    );
};

export default PayButton;