import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { useLocation, useNavigate } from 'react-router-dom';

const Loading = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate('/login', {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='text-2xl py-10'>Redirecting to you in {count} seconds</h1>
            <Triangle
                height="80"
                width="80"
                color="#5f4d5d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading;