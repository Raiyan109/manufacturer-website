import React, { useContext, useEffect, useState } from 'react';
import fetcher from '../../../api';
import { AuthContext } from '../../../context/AuthContext';
import Loading from '../../Shared/Loading';
import AllProduct from './AllProduct';

const AllProducts = () => {

    // const { loading } = useContext(AuthContext)
    const [parts, setParts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('api/parts')
            // console.log(res.data.data);
            setParts(res.data.data)
        })()
    }, [])

    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='container mx-auto  px-5 py-16 '>
            {/* Title */}
            <div className="pt-5 bg-white">
                <h1 className="text-center text-5xl font-bold font-Montserrat text-primary">All Products</h1>
            </div>

            {/* Products */}
            <section className='py-10'>
                <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6  md:grid-cols-2 lg:grid-cols-3'>
                    {
                        parts?.map(part => <AllProduct
                            key={part._id}
                            part={part}
                        />)
                    }
                </div>
            </section>
        </div>
    );
};

export default AllProducts;