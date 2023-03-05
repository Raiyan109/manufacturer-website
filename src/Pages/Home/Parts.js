import React, { useEffect, useState } from 'react';
import Part from './Part';
import axios from 'axios'
import fetcher from '../../api';

const Parts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('api/parts')
            console.log(res);
            setParts(res.data)
        })()
    }, [])
    return (
        <div>

            <h1 className='text-4xl text-secondary text-center my-12 font-bold'>Our Fragments</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 m-10'>
                {
                    parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    />)
                }
            </div>

            {

            }
        </div>
    );
};

export default Parts;