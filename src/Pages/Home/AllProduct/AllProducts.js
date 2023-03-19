import React, { useEffect, useState } from 'react';
import fetcher from '../../../api';
import AllProduct from './AllProduct';

const AllProducts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('api/parts')
            console.log(res);
            setParts(res.data)
        })()
    }, [])
    return (
        <div className='container mx-auto  px-5 py-16 '>
            {/* Title */}
            <div class="pt-5 bg-white">
                <h1 class="text-center text-5xl font-bold font-Montserrat text-primary">All Products</h1>
            </div>

            {/* Products */}
            <section className='py-10'>
                <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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