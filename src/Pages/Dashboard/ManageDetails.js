import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageDetails = () => {
    const [purchase, setPurchase] = useState([])
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch(`https://leviathan-server-1.onrender.com/api/parts/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    console.log(purchase);
    return (
        <div>
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">{purchase.name}</h1>
        </div>
    );
};

export default ManageDetails;