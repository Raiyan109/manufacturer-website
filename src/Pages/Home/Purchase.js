import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    // const [purchase, setPurchase] = useState()

    // useEffect( () => {
    //     fetch(`http://localhost:5000/part/${id}`)
    // },[])

    const url = `http://localhost:5000/part/${id}`
    const { data, isloading } = useQuery(['part', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isloading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p>{data.name}</p>
        </div>
    );
};

export default Purchase;